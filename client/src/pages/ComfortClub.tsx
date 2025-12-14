import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Gift, Sparkles, Zap, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ComfortClub() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/comfort-club-hero.jpg" 
            alt="Relaxing comfort" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
                Join The <span className="text-accent font-script">Comfort Club</span> TODAY!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Unlock exclusive deals, early access to new collections, and insider updates on the latest comfort innovations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Gift className="h-6 w-6 text-accent" />, title: "Exclusive Member Gifts", desc: "Enjoy surprise gifts and seasonal treats." },
                  { icon: <Zap className="h-6 w-6 text-accent" />, title: "First Look Access", desc: "Discover new collections before the public." },
                  { icon: <Sparkles className="h-6 w-6 text-accent" />, title: "Design Trend Updates", desc: "Curated style guides from experts." },
                  { icon: <Mail className="h-6 w-6 text-accent" />, title: "Insider News", desc: "Be the first to know about sales." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 bg-white p-2 rounded-full shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-t-4 border-t-accent shadow-xl bg-white/95 backdrop-blur-sm">
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="font-serif text-2xl text-primary">Sign Up Now</CardTitle>
                  <p className="text-sm text-muted-foreground">It takes less than a minute to join!</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Jane" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                      <Input id="email" type="email" placeholder="jane@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="referrer">Who walked you through your signup?</Label>
                      <Input id="referrer" placeholder="Enter name (optional)" />
                    </div>
                    
                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox id="sms-consent" className="mt-1" />
                      <Label htmlFor="sms-consent" className="text-xs text-muted-foreground font-normal leading-snug">
                        I agree to receive recurring automated promotional and personalized marketing text messages from La-Z-Boy Columbus via SMS. Consent is not a condition of any purchase. Message and data rates may apply. Reply STOP to cancel.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox id="email-consent" className="mt-1" />
                      <Label htmlFor="email-consent" className="text-xs text-muted-foreground font-normal leading-snug">
                        I want to subscribe to your mailing list.
                      </Label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-lg py-6 mt-4">
                      Join the Club
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4 italic">
                      By adding your name above, you're giving us the green light to text or email you. 
                      We promise to keep it helpful, fun and absolutely not spammy. Pinky swear!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
