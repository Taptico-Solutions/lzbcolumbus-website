import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenClingstonePopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenClingstonePopup", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navy header with Clingstones branding */}
            <div className="bg-[#003349] px-6 pt-6 pb-5 text-center relative overflow-hidden">
              {/* Subtle baseball stitching decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#C25B3C] rounded-full mb-3 shadow-lg">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div className="inline-block bg-[#C25B3C] text-white text-[10px] font-black tracking-[2px] uppercase px-3 py-1 rounded-full mb-2">
                  Register to Win
                </div>
                <h2 className="font-serif text-white text-2xl font-bold leading-tight mb-1">
                  Win Tickets to<br />
                  <span className="italic text-[#E6E2D5]">Opening Night!</span>
                </h2>
                <p className="text-white/75 text-sm mt-1">
                  Columbus Clingstones · April 3rd · Synovus Park 🎆
                </p>
              </div>
            </div>

            {/* Form body */}
            <div className="px-6 py-5">
              <p className="text-sm text-center text-gray-600 mb-4 leading-relaxed">
                Join the <strong className="text-[#003349]">Comfort Club</strong> for your chance to win two tickets to the Clingstones Home Opener — plus fireworks after the game!
              </p>

              <form
                action="https://lazyboy.us2.list-manage.com/subscribe/post?u=125356b6e77a67ca13f0f1c06&amp;id=677285eb78&amp;f_id=00b33ce0f0"
                method="post"
                id="mc-popup-subscribe-form"
                name="mc-popup-subscribe-form"
                className="space-y-3 validate"
                target="_blank"
                onSubmit={handleClose}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="popup-FNAME" className="text-xs font-semibold text-gray-700">First Name</Label>
                    <Input
                      type="text"
                      name="FNAME"
                      id="popup-FNAME"
                      placeholder="Jane"
                      className="bg-white h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="popup-LNAME" className="text-xs font-semibold text-gray-700">Last Name</Label>
                    <Input
                      type="text"
                      name="LNAME"
                      id="popup-LNAME"
                      placeholder="Doe"
                      className="bg-white h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="popup-EMAIL" className="text-xs font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    name="EMAIL"
                    id="popup-EMAIL"
                    placeholder="jane@example.com"
                    className="bg-white h-9 text-sm required email"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="popup-MMERGE7" className="text-xs font-semibold text-gray-700">City</Label>
                    <Input
                      type="text"
                      name="MMERGE7"
                      id="popup-MMERGE7"
                      className="bg-white h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="popup-MMERGE9" className="text-xs font-semibold text-gray-700">Zip Code</Label>
                    <Input
                      type="text"
                      name="MMERGE9"
                      id="popup-MMERGE9"
                      className="bg-white h-9 text-sm"
                    />
                  </div>
                </div>

                {/* Honeypot — do not remove */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input type="text" name="b_125356b6e77a67ca13f0f1c06_677285eb78" tabIndex={-1} defaultValue="" />
                </div>

                <Button
                  type="submit"
                  name="subscribe"
                  id="mc-popup-subscribe"
                  className="w-full bg-[#C25B3C] hover:bg-[#A04830] text-white font-bold text-sm py-5 mt-1 rounded-xl"
                >
                  ⚾ Enter to Win + Join the Comfort Club
                </Button>

                <p className="text-[10px] text-center text-gray-400 leading-tight">
                  By signing up you join the Comfort Club and agree to receive emails from La-Z-Boy Columbus. 
                  Winner selected at random. No purchase necessary. One entry per household.
                </p>
              </form>

              <button
                onClick={handleClose}
                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 transition-colors"
              >
                No thanks, I don't want to win tickets
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
