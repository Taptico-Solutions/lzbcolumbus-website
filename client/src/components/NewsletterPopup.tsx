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
          style={{ background: "rgba(0,0,0,0.65)" }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#dce8ed", fontFamily: "'Lato', sans-serif" }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 text-[#003349]/50 hover:text-[#003349] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ── TOP ROW: Comfort Club shield + Enter to Win box ── */}
            <div className="flex items-stretch gap-0 p-4 pb-2">

              {/* LEFT: Comfort Club shield */}
              <div className="flex flex-col items-center justify-center pr-3" style={{ minWidth: "110px" }}>
                <img
                  src="/images/comfort-club-logo.png"
                  alt="La-Z-Boy Comfort Club"
                  style={{ width: "105px", height: "auto", objectFit: "contain" }}
                />
              </div>

              {/* RIGHT: Enter to Win green box */}
              <div
                className="flex-1 rounded-xl p-3"
                style={{ background: "#2d6a3f" }}
              >
                {/* Header row: ENTER TO WIN + badge side by side */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "6px" }}>
                  <div>
                    <p style={{ color: "#fff", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0px" }}>
                      ENTER TO
                    </p>
                    <p style={{ color: "#fff", fontSize: "32px", fontWeight: 900, lineHeight: 1 }}>
                      WIN!
                    </p>
                  </div>
                  <img
                    src="/images/clingstones-badge.png"
                    alt="Columbus Clingstones"
                    style={{ width: "64px", height: "64px", objectFit: "contain", flexShrink: 0 }}
                  />
                </div>
                <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", lineHeight: 1.5, marginBottom: "8px" }}>
                  4 tickets to opening night, Friday April 3rd. Enjoy the game and stay for the fireworks!
                </p>
                <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, lineHeight: 1.5 }}>
                  Join our comfort club to be eligible to win.<br />
                  2 winners announced 3/27/26.
                </p>
              </div>
            </div>

            {/* ── JOIN THE CLUB headline ── */}
            <div className="px-4 pt-2 pb-1">
              <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#003349", lineHeight: 1.05, letterSpacing: "-0.5px" }}>
                JOIN THE CLUB
              </h2>
              <p style={{ fontSize: "14px", color: "#333", lineHeight: 1.6, marginTop: "6px" }}>
                We're giving away a set of our <strong>custom pillows</strong> every month! Plus get <strong>exclusive gifts</strong>, a first look at <strong>new arrivals</strong> and <strong>design trend updates</strong>!
              </p>
            </div>

            {/* ── FORM ── */}
            <div className="px-4 pt-3 pb-2">
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
                  style={{ background: "#003349" }}
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
              className="flex items-center justify-center py-4"
              style={{ background: "#C25B3C" }}
            >
              <img
                src="/images/logo-final.png"
                alt="La-Z-Boy"
                style={{ height: "38px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
