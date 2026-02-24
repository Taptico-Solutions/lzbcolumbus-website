import { motion } from "framer-motion";
import { Tag, MapPin, Clock, Share2, Facebook, Mail, Link as LinkIcon, ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";

export default function SpecialOffers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const shareUrl = window.location.href;
  const shareText = "Check out these exclusive offers at La-Z-Boy Columbus!";

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

  // Current offers
  const offers = [
    {
      id: 1,
      title: "Anniversary Sale",
      description: "Celebrate with us! Get 35% OFF timeless styles storewide. Advertised items. Exclusions apply.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/EEEtTPzulEwKBaag.jpg",
      validUntil: "Limited Time",
      tag: "New Offer"
    },

  ];

  return (
    <div className="min-h-screen bg-[#F8F7F5] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive deals and limited-time savings for our Columbus community.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-md">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <div className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer" onClick={() => setSelectedImage(offer.image)}>
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#C25B3C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10">
                      {offer.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center group-hover:opacity-100 opacity-0">
                      <ZoomIn className="text-white w-12 h-12 drop-shadow-lg" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-[#003349]">
                      {offer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#C25B3C] font-medium">
                      <Clock className="h-4 w-4" />
                      <span>Valid until {offer.validUntil}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full bg-[#003349] hover:bg-[#004460] text-white group"
                      onClick={() => setSelectedImage(offer.image)}
                    >
                      View Details <ZoomIn className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>

          {/* Image Modal */}
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-8 w-8" />
                  <span className="sr-only">Close</span>
                </button>
                {selectedImage && (
                  <img 
                    src={selectedImage} 
                    alt="Special Offer Detail" 
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Coming Soon / Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-12 border border-[#003349]/5 relative overflow-hidden text-center max-w-4xl mx-auto"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#003349] to-[#C25B3C]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003349] mb-4">
                Don't Miss the Next Sale
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join our Comfort Club to get notified about upcoming sales and exclusive subscriber-only offers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/comfort-club">
                  <Button size="lg" className="bg-[#003349] hover:bg-[#004460] text-white h-12 px-8">
                    Join Comfort Club
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="border-[#003349] text-[#003349] hover:bg-[#003349]/5 h-12 px-8">
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
              Share these offers
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
