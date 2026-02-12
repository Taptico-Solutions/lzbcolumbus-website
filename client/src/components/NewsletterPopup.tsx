import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = sessionStorage.getItem("hasSeenNewsletterPopup");

    if (!hasSeenPopup) {
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
                  <p className="text-sm opacity-80">Get your coupon for white-glove delivery</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-10">
                <div className="flex flex-col h-full justify-center">
                  <div className="md:hidden flex items-center gap-3 mb-6 text-[#003349]">
                    <Truck className="w-6 h-6" />
                    <span className="font-serif font-bold text-xl">Free Delivery</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#002D5C] mb-2">Get Your Free Delivery Coupon!</h2>
                  <p className="text-gray-600 mb-6">
                    Don't miss out on free white-glove delivery for your next purchase.
                  </p>

                  <div className="space-y-4">
                    <p className="text-gray-600 mb-4 text-sm">
                      Click below to get your printable coupon for free white-glove delivery on your next purchase!
                    </p>
                    <Link href="/free-delivery-coupon">
                      <Button 
                        className="w-full h-12 bg-[#C25B3C] hover:bg-[#A04830] text-white font-medium text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        Get Coupon
                      </Button>
                    </Link>
                    <p className="text-[10px] text-center text-gray-400 leading-tight">
                      Enjoy free delivery on one item within our local delivery area. Additional items or deliveries outside this area may be subject to additional fees. Limit one per address. Valid on in-store purchases only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
