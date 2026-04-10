import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Sparkles, Zap, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { toast } from "sonner";

export default function ComfortClub() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [salesperson, setSalesperson] = useState("");

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
        MMERGE24: salesperson,
      });
      if (response.result === "success") {
        localStorage.setItem("comfortClubSubscribed", "true");
        setIsSubscribed(true);
        toast.success("Welcome to the Comfort Club!");
      } else {
        if (response.msg.includes("already subscribed")) {
          localStorage.setItem("comfortClubSubscribed", "true");
          setIsSubscribed(true);
          toast.info("You're already a member of the Comfort Club!");
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
    <div className="flex flex-col">
      {/* Enter to Win – Clingstones Giveaway Artwork */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029768615/JcjScaA3JMvUY4j8iKMkae/entertowinwebsite_699e26fe.webp"
                alt="Enter to Win 4 tickets to Columbus Clingstones Opening Night – Friday April 3rd, fireworks included. 2 winners announced 3/27/26."
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/lzpBuZQdXkGqwuoj.jpg" 
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
                  {isSubscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8, bounce: 0.5, delay: 0.2 }}
                        className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4"
                      >
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </motion.div>
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">You're in the Club!</h3>
                      <p className="text-muted-foreground">
                        Thanks for joining the Comfort Club. Keep an eye on your inbox for your welcome email.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cc-FNAME">First Name</Label>
                          <Input
                            type="text"
                            id="cc-FNAME"
                            placeholder="Jane"
                            className="bg-white"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cc-LNAME">Last Name</Label>
                          <Input
                            type="text"
                            id="cc-LNAME"
                            placeholder="Doe"
                            className="bg-white"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cc-EMAIL">Email Address <span className="text-destructive">*</span></Label>
                        <Input 
                          type="email" 
                          id="cc-EMAIL" 
                          placeholder="jane@example.com" 
                          className="bg-white"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cc-MMERGE7">City</Label>
                          <Input
                            type="text"
                            id="cc-MMERGE7"
                            className="bg-white"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cc-MMERGE9">Zip Code</Label>
                          <Input
                            type="text"
                            id="cc-MMERGE9"
                            className="bg-white"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cc-MMERGE24">Who helped you with your sign up today?</Label>
                        <Select value={salesperson} onValueChange={setSalesperson}>
                          <SelectTrigger id="cc-MMERGE24" className="bg-white">
                            <SelectValue placeholder="Select a team member..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Marlon Rice">Marlon Rice</SelectItem>
                            <SelectItem value="Tamika Davis">Tamika Davis</SelectItem>
                            <SelectItem value="Casey Cooper">Casey Cooper</SelectItem>
                            <SelectItem value="Jason Hall">Jason Hall</SelectItem>
                            <SelectItem value="Bret Gladden">Bret Gladden</SelectItem>
                            <SelectItem value="Aaulashua Smoot">Aaulashua Smoot</SelectItem>
                            <SelectItem value="Kennth Llera">Kennth Llera</SelectItem>
                            <SelectItem value="Susan Evans">Susan Evans</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-lg py-6 mt-4"
                      >
                        {isSubmitting ? "Joining…" : "Join the Club"}
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-4 italic">
                        By adding your name above, you're giving us the green light to text or email you. 
                        We promise to keep it helpful, fun and absolutely not spammy. Pinky swear!
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
