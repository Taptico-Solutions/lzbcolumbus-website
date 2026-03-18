import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Auto-expire after contest ends on March 27, 2026
    const contestEnd = new Date('2026-03-28T00:00:00');
    if (new Date() > contestEnd) return;

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.70)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#fff", fontFamily: "'Lato', sans-serif" }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 bg-white/80 rounded-full p-0.5 text-[#003349]/60 hover:text-[#003349] transition-colors shadow"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ── FLYER IMAGE (full width, no padding) ── */}
            <div className="w-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029768615/JcjScaA3JMvUY4j8iKMkae/entertowinwebsite_699e26fe.webp"
                alt="Enter to Win 4 tickets to Columbus Clingstones Opening Night – Friday April 3rd"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* ── JOIN THE CLUB headline ── */}
            <div className="px-5 pt-4 pb-1">
              <h2 style={{ fontSize: "28px", fontWeight: 900, color: "#003349", lineHeight: 1.05, letterSpacing: "-0.5px" }}>
                JOIN THE CLUB
              </h2>
              <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.6, marginTop: "5px" }}>
                Join our <strong>Comfort Club</strong> to enter — plus get <strong>exclusive gifts</strong>, a first look at <strong>new arrivals</strong>, and <strong>design trend updates</strong>!
              </p>
            </div>

            {/* ── FORM ── */}
            <div className="px-5 pt-3 pb-2">
              <form
                action="https://lazyboy.us2.list-manage.com/subscribe/post?u=125356b6e77a67ca13f0f1c06&amp;id=677285eb78&amp;f_id=00b33ce0f0"
                method="post"
                id="mc-popup-subscribe-form"
                name="mc-popup-subscribe-form"
                className="space-y-2 validate"
                target="_blank"
                onSubmit={handleClose}
              >
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="popup-FNAME" className="text-xs font-bold text-[#003349]">First Name</Label>
                    <Input type="text" name="FNAME" id="popup-FNAME" placeholder="Jane" className="h-8 text-sm mt-0.5 bg-white" />
                  </div>
                  <div>
                    <Label htmlFor="popup-LNAME" className="text-xs font-bold text-[#003349]">Last Name</Label>
                    <Input type="text" name="LNAME" id="popup-LNAME" placeholder="Doe" className="h-8 text-sm mt-0.5 bg-white" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="popup-EMAIL" className="text-xs font-bold text-[#003349]">Email <span className="text-red-500">*</span></Label>
                  <Input type="email" name="EMAIL" id="popup-EMAIL" placeholder="jane@example.com" className="h-8 text-sm mt-0.5 bg-white required email" required />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="popup-MMERGE7" className="text-xs font-bold text-[#003349]">City</Label>
                    <Input type="text" name="MMERGE7" id="popup-MMERGE7" className="h-8 text-sm mt-0.5 bg-white" />
                  </div>
                  <div>
                    <Label htmlFor="popup-MMERGE9" className="text-xs font-bold text-[#003349]">Zip Code</Label>
                    <Input type="text" name="MMERGE9" id="popup-MMERGE9" className="h-8 text-sm mt-0.5 bg-white" />
                  </div>
                </div>

                {/* Honeypot */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input type="text" name="b_125356b6e77a67ca13f0f1c06_677285eb78" tabIndex={-1} defaultValue="" />
                </div>

                <Button
                  type="submit"
                  name="subscribe"
                  className="w-full font-black text-sm py-4 rounded-xl tracking-wide text-white mt-1"
                  style={{ background: "#2d6a3f" }}
                >
                  Enter to Win + Join the Comfort Club
                </Button>
              </form>

              <button
                onClick={handleClose}
                className="w-full text-center text-[11px] text-gray-400 hover:text-gray-600 mt-2 transition-colors pb-1"
              >
                No thanks
              </button>
            </div>

            {/* ── RUST LA-Z-BOY SCRIPT BAR ── */}
            <div
              className="flex items-center justify-center py-3"
              style={{ background: "#C25B3C" }}
            >
              <img
                src="/images/logo-final.png"
                alt="La-Z-Boy"
                style={{ height: "34px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
