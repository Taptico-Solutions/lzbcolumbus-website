import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComfortClub from "./pages/ComfortClub";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NewYear2026 from "@/pages/NewYear2026";
import RoomPlanner from "./pages/RoomPlanner";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/comfort-club" component={ComfortClub} />
        <Route path="/community" component={Community} />
      <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
      <Route path="/new-year-2026" component={NewYear2026} />
        <Route path="/room-planner" component={RoomPlanner} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
