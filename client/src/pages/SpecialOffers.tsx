import { motion } from "framer-motion";
import { Tag, MapPin, Clock, Share2, Facebook, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";

export default function SpecialOffers() {
  const shareUrl = window.location.href;
  const shareText = "Check out these exclusive offers coming soon to La-Z-Boy Columbus!";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "email":
        url = `mailto:?subject=${encodeURIComponent("Special Offers at La-Z-Boy Columbus")}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
        break;
    }
    if (url) window.open(url, "_blank");
  };
  return (
    <div className="min-h-screen bg-[#F8F7F5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-[#C25B3C]/10 rounded-full mb-6">
              <Tag className="h-8 w-8 text-[#C25B3C]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#003349] mb-6">
              Special Offers
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#C25B3C] font-medium text-lg mb-8">
              <MapPin className="h-5 w-5" />
              <span>Available at Columbus, Georgia location ONLY!</span>
            </div>
          </div>

          {/* Coming Soon Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-12 md:p-20 border border-[#003349]/5 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003349] to-[#C25B3C]" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C25B3C]/5 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#003349]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <Clock className="h-16 w-16 text-[#003349]/40 mx-auto mb-6" />
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#003349] mb-6 tracking-tight">
                COMING SOON
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                We're preparing some exclusive deals just for our Columbus community. 
                Check back soon for limited-time savings on your favorite comfort pieces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/comfort-club">
                  <Button size="lg" className="bg-[#003349] hover:bg-[#004460] text-white h-14 px-8 text-lg">
                    Join Comfort Club for Updates
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="border-[#003349] text-[#003349] hover:bg-[#003349]/5 h-14 px-8 text-lg">
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Social Sharing */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-[#003349] font-medium flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share with friends
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#003349]/20 text-[#003349] hover:bg-[#003349]/5 hover:text-[#003349]"
                onClick={() => handleShare("facebook")}
                title="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#003349]/20 text-[#003349] hover:bg-[#003349]/5 hover:text-[#003349]"
                onClick={() => handleShare("twitter")}
                title="Share on X (Twitter)"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#003349]/20 text-[#003349] hover:bg-[#003349]/5 hover:text-[#003349]"
                onClick={() => handleShare("email")}
                title="Share via Email"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-[#003349]/20 text-[#003349] hover:bg-[#003349]/5 hover:text-[#003349]"
                onClick={handleCopyLink}
                title="Copy Link"
              >
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Store Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-[#003349] text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600">
                5555 Whittlesey Blvd<br />
                Columbus, GA 31909
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-[#003349] text-lg mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon-Sat: 10am - 7pm<br />
                Sun: 12pm - 6pm
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-[#003349] text-lg mb-2">Contact</h3>
              <p className="text-gray-600">
                (706) 322-9999<br />
                sevans@lazboy-columbus.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
