import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Pillars from "./pages/Pillars";
import Oracle from "./pages/Oracle";
import Crucible from "./pages/Crucible";
import Mirror from "./pages/Mirror";
import Ascent from "./pages/Ascent";
import Onboarding from "./pages/Onboarding";
import SessionDetail from "./pages/SessionDetail";
import { Redirect } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/pillars" component={Pillars} />
       <Route path="/onboarding" component={Onboarding} />
      {/* Redirects for old routes to maintain backward compatibility */}
      {/* Redirects for old routes to maintain backward compatibility */}
      <Route path="/journal">{() => <Redirect to="/mirror" />}</Route>
      <Route path="/resonance">{() => <Redirect to="/mirror" />}</Route>
      <Route path="/forge">{() => <Redirect to="/crucible" />}</Route>
      <Route path="/actionable-steps">{() => <Redirect to="/ascent" />}</Route>
      <Route path="/oracle" component={Oracle} />
      <Route path={"/crucible"} component={Crucible} />
      <Route path={"/crucible/:id"} component={SessionDetail} />
      <Route path="/mirror" component={Mirror} />
      <Route path="/ascent" component={Ascent} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
