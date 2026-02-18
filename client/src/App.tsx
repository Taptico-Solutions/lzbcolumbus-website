import { Toaster } from "@/components/ui/sonner";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ComfortClub from "./pages/ComfortClub";
import Community from "./pages/Community";
import Blog from "@/pages/Blog";
import FreeDeliveryCoupon from "@/pages/FreeDeliveryCoupon";
import BlogPost from "@/pages/BlogPost";
import Category from "@/pages/Category";
import Product from "@/pages/Product";
import MeetTheTeam from "@/pages/MeetTheTeam";
import NewYear2026 from "@/pages/NewYear2026";
import RoomPlanner from "./pages/RoomPlanner";
import ServiceRequest from "./pages/ServiceRequest";
import GeneralQuestions from "./pages/GeneralQuestions";
import SpecialOffers from "./pages/SpecialOffers";
import ClingstonesPartnership from "./pages/ClingstonesPartnership";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/comfort-club" component={ComfortClub} />
        <Route path="/community" component={Community} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/clingstones-partnership" component={ClingstonesPartnership} />
      <Route path="/free-delivery-coupon" component={FreeDeliveryCoupon} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/category/:name" component={Category} />
        <Route path="/product/:id" component={Product} />
        <Route path="/meet-the-team" component={MeetTheTeam} />
      <Route path="/new-year-2026" component={NewYear2026} />
        <Route path="/room-planner" component={RoomPlanner} />
        <Route path="/service-request" component={ServiceRequest} />
        <Route path="/general-questions" component={GeneralQuestions} />
        <Route path="/special-offers" component={SpecialOffers} />
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
          <NewsletterPopup />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
