import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { toast } from "sonner";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup or subscribed
    const hasSeenPopup = sessionStorage.getItem("hasSeenNewsletterPopup");
    const isAlreadySubscribed = localStorage.getItem("comfortClubSubscribed");

    if (!hasSeenPopup && !isAlreadySubscribed) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenNewsletterPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    const data = {
      EMAIL: email,
    };

    try {
      const response = await subscribeToMailchimp(data);
      if (response.result === 'success') {
        localStorage.setItem("comfortClubSubscribed", "true");
        setIsSubscribed(true);
        // Close popup after success message
        setTimeout(() => {
          setIsOpen(false);
          toast.success("Code sent to your inbox!");
        }, 3000);
      } else {
        if (response.msg.includes("already subscribed")) {
          localStorage.setItem("comfortClubSubscribed", "true");
          setIsSubscribed(true);
          toast.info("You were already subscribed!");
          setTimeout(() => setIsOpen(false), 3000);
        } else {
          toast.error("Something went wrong. Please try again.");
          console.error(response.msg);
        }
      }
    } catch (error) {
      toast.error("Connection error. Please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="hidden md:block w-2/5 bg-[#003349] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Free Delivery</h3>
                  <p className="text-sm opacity-80">On your first order when you join the club</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-10">
                {isSubscribed ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.8 }}
                      className="mb-4"
                    >
                      <CheckCircle2 className="w-16 h-16 text-[#C25B3C]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#003349] mb-2">You're In!</h3>
                    <p className="text-gray-600">Check your inbox for your free delivery code.</p>
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-center">
                    <div className="md:hidden flex items-center gap-3 mb-6 text-[#003349]">
                      <Truck className="w-6 h-6" />
                      <span className="font-serif font-bold text-xl">Free Delivery</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-[#003349] mb-2">Get Free Delivery</h2>
                    <p className="text-gray-600 mb-6">
                      Join the Comfort Club today and get free delivery on your next purchase plus exclusive design tips.
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="popup-email" className="sr-only">Email address</Label>
                        <Input
                          id="popup-email"
                          type="email"
                          placeholder="Enter your email address"
                          className="h-12"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                        />
                      </div>
                      <Button 
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full h-12 bg-[#C25B3C] hover:bg-[#A04830] text-white font-medium text-lg"
                      >
                        {isLoading ? "Processing..." : "Unlock Free Delivery"}
                      </Button>
                      <p className="text-xs text-center text-gray-400">
                        No spam, unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
