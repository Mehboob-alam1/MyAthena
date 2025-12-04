import { trpc } from "@/lib/trpc";
import { UNAUTHED_ERR_MSG } from '@shared/const';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { createRoot } from "react-dom/client";
import superjson from "superjson";
import * as Sentry from "@sentry/react";
import { Replay } from "@sentry/replay";
import App from "./App";
import { getLoginUrl } from "./const";
import "./index.css";

// Initialize Sentry for error tracking and performance monitoring
const initSentry = () => {
  const isDev = import.meta.env.DEV;
  const isProduction = !isDev && window.location.hostname !== 'localhost';
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
  
  // Only initialize Sentry if we have a valid DSN and we're in production
  if (isProduction && sentryDsn && sentryDsn !== 'https://examplePublicKey@o0.ingest.sentry.io/0') {
    try {
      Sentry.init({
        dsn: sentryDsn,
        environment: import.meta.env.MODE,
        integrations: [
          new Replay({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
        tracesSampleRate: 0.1,
        replaysSessionSampleRate: 0.05,
        replaysOnErrorSampleRate: 0.5,
        beforeSend(event) {
          // Filter out certain errors
          if (event.exception) {
            const error = String(event.exception.values?.[0]?.value || '');
            // Don't send network errors that are expected
            if (error.includes('Network request failed') || error.includes('Failed to fetch')) {
              return null;
            }
          }
          return event;
        }
      });
      console.log('[Sentry] Initialized successfully');
    } catch (error) {
      console.warn('[Sentry] Failed to initialize:', error);
    }
  } else if (!isProduction) {
    console.log('[Sentry] Skipped initialization (development mode)');
  }
};

// Initialize Sentry before rendering
initSentry();

const queryClient = new QueryClient();

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
    
    // Capture error in Sentry (only if initialized)
    if (error instanceof Error && Sentry.isInitialized?.()) {
      Sentry.captureException(error, {
        tags: {
          type: 'api_query_error'
        }
      });
    }
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
    
    // Capture error in Sentry (only if initialized)
    if (error instanceof Error && Sentry.isInitialized?.()) {
      Sentry.captureException(error, {
        tags: {
          type: 'api_mutation_error'
        }
      });
    }
  }
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
      },
    }),
  ],
});

const SentryApp = Sentry.withProfiler(App);

createRoot(document.getElementById("root")!).render(
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <SentryApp />
    </QueryClientProvider>
  </trpc.Provider>
);
