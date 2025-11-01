import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Oracle from "./pages/Oracle";
import Forge from "./pages/Forge";
import Journal from "./pages/Journal";
import Onboarding from "./pages/Onboarding";
import SessionDetail from "./pages/SessionDetail";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/onboarding"} component={Onboarding} />
      <Route path={"/oracle"} component={Oracle} />
      <Route path={"/forge"} component={Forge} />
      <Route path={"/forge/:id"} component={SessionDetail} />
      <Route path={"/journal"} component={Journal} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
