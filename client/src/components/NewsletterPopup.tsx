import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { toast } from "sonner";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await subscribeToMailchimp({
        EMAIL: email,
        FNAME: fname,
        LNAME: lname,
        MMERGE7: city,
        MMERGE9: zip,
      });
      if (response.result === "success") {
        localStorage.setItem("comfortClubSubscribed", "true");
        setSubmitted(true);
      } else {
        if (response.msg.includes("already subscribed")) {
          localStorage.setItem("comfortClubSubscribed", "true");
          setSubmitted(true);
        } else {
          toast.error("Something went wrong. Please try again.");
          console.error(response.msg);
        }
      }
    } catch (error) {
      toast.error("Connection error. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="px-5 pt-6 pb-5 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
                  className="inline-flex items-center justify-center p-3 bg-[#2d6a3f]/10 rounded-full mb-3"
                >
                  <CheckCircle2 className="h-8 w-8 text-[#2d6a3f]" />
                </motion.div>
                <h2 style={{ fontSize: "22px", fontWeight: 900, color: "#003349", lineHeight: 1.1 }}>
                  You're in!
                </h2>
                <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.6, marginTop: "6px" }}>
                  Thanks for joining the Comfort Club. Watch your inbox for updates and your chance to win!
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-center text-[12px] text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
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
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="popup-FNAME" className="text-xs font-bold text-[#003349]">First Name</Label>
                        <Input
                          type="text"
                          id="popup-FNAME"
                          placeholder="Jane"
                          className="h-8 text-sm mt-0.5 bg-white"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="popup-LNAME" className="text-xs font-bold text-[#003349]">Last Name</Label>
                        <Input
                          type="text"
                          id="popup-LNAME"
                          placeholder="Doe"
                          className="h-8 text-sm mt-0.5 bg-white"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="popup-EMAIL" className="text-xs font-bold text-[#003349]">Email <span className="text-red-500">*</span></Label>
                      <Input
                        type="email"
                        id="popup-EMAIL"
                        placeholder="jane@example.com"
                        className="h-8 text-sm mt-0.5 bg-white"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="popup-MMERGE7" className="text-xs font-bold text-[#003349]">City</Label>
                        <Input
                          type="text"
                          id="popup-MMERGE7"
                          className="h-8 text-sm mt-0.5 bg-white"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="popup-MMERGE9" className="text-xs font-bold text-[#003349]">Zip Code</Label>
                        <Input
                          type="text"
                          id="popup-MMERGE9"
                          className="h-8 text-sm mt-0.5 bg-white"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-black text-sm py-4 rounded-xl tracking-wide text-white mt-1"
                      style={{ background: "#2d6a3f" }}
                    >
                      {isSubmitting ? "Submitting…" : "Enter to Win + Join the Comfort Club"}
                    </Button>
                  </form>

                  <button
                    onClick={handleClose}
                    className="w-full text-center text-[11px] text-gray-400 hover:text-gray-600 mt-2 transition-colors pb-1"
                  >
                    No thanks
                  </button>
                </div>
              </>
            )}

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
