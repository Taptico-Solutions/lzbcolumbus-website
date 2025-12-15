import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
              <div className="mb-8">
                <img src="/images/comfort-club-logo.png" alt="Comfort Club" className="h-32 md:h-40 w-auto object-contain" />
                <h1 className="sr-only">Join The Comfort Club TODAY!</h1>
              </div>
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
                  <form 
                    action="https://lazyboy.us2.list-manage.com/subscribe/post?u=125356b6e77a67ca13f0f1c06&amp;id=677285eb78&amp;f_id=00b33ce0f0" 
                    method="post" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="space-y-4 validate" 
                    target="_blank"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mce-FNAME">First Name</Label>
                        <Input type="text" name="FNAME" id="mce-FNAME" placeholder="Jane" className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mce-LNAME">Last Name</Label>
                        <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Doe" className="bg-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mce-EMAIL">Email Address <span className="text-destructive">*</span></Label>
                      <Input 
                        type="email" 
                        name="EMAIL" 
                        id="mce-EMAIL" 
                        placeholder="jane@example.com" 
                        className="bg-white required email"
                        required 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mce-MMERGE7">City</Label>
                        <Input type="text" name="MMERGE7" id="mce-MMERGE7" className="bg-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mce-MMERGE9">Zip Code</Label>
                        <Input type="text" name="MMERGE9" id="mce-MMERGE9" className="bg-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mce-MMERGE24">Who helped you with your sign up today?</Label>
                      <select 
                        name="MMERGE24" 
                        id="mce-MMERGE24" 
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value=""></option>
                        <option value="Marlon Rice">Marlon Rice</option>
                        <option value="Tamika Davis">Tamika Davis</option>
                        <option value="Casey Cooper">Casey Cooper</option>
                        <option value="Jason Hall">Jason Hall</option>
                        <option value="Bret Gladden">Bret Gladden</option>
                        <option value="Aaulashua Smoot">Aaulashua Smoot</option>
                        <option value="Kennth Llera">Kennth Llera</option>
                        <option value="Susan Evans">Susan Evans</option>
                      </select>
                    </div>
                    
                    {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                      <input type="text" name="b_125356b6e77a67ca13f0f1c06_677285eb78" tabIndex={-1} defaultValue="" />
                    </div>
                    
                    <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-lg py-6 mt-4">
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
