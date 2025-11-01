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
import Resonance from "./pages/Resonance";
import ActionableSteps from "./pages/ActionableSteps";
import Onboarding from "./pages/Onboarding";
import SessionDetail from "./pages/SessionDetail";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/pillars" component={Pillars} />
      <Route path={"/onboarding"} component={Onboarding} />
      <Route path={"/oracle"} component={Oracle} />
      <Route path={"/crucible"} component={Crucible} />
      <Route path={"/crucible/:id"} component={SessionDetail} />
      <Route path={"/resonance"} component={Resonance} />
      <Route path={"/actionable-steps"} component={ActionableSteps} />
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
