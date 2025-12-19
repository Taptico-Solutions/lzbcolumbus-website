import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ArrowRight, Layout, Monitor, Share2, MousePointerClick } from "lucide-react";
import { Link } from "wouter";

export default function RoomPlanner() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600" 
            alt="Virtual Room Planner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
              Visualize Your Dream Room
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              Design your space with our 3D Room Planner before you buy.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-none h-14 px-8 text-lg">
                <a href="https://www.la-z-boy.com/content/Room-Planner-3D" target="_blank" rel="noopener noreferrer">
                  Start Designing Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">From Render to Reality</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how accurate our 3D Room Planner is. Drag the slider to compare the digital design with the final real-life result.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 rounded-xl overflow-hidden shadow-2xl">
            <BeforeAfterSlider 
              beforeImage="/images/project-upload/IMG_6453.jpg" 
              afterImage="/images/project-upload/IMG_7228.jpg" 
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">See It In Action</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch our design experts demonstrate how to use the 3D Room Planner to create your perfect space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0csx9RMCUF8" 
                title="How to Decorate a Room | La-Z-Boy 3D Room Planner" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/8YC8NIANtN4" 
                title="How to Design a Mid-Century Modern Living Room" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-primary mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our easy-to-use tool helps you plan your layout and see how La-Z-Boy furniture fits in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: "1. Create Your Room",
                description: "Enter your room dimensions or choose from standard room shapes to get started."
              },
              {
                icon: MousePointerClick,
                title: "2. Add Furniture",
                description: "Drag and drop La-Z-Boy sofas, recliners, and sectionals into your virtual space."
              },
              {
                icon: Monitor,
                title: "3. View in 3D",
                description: "Switch to 3D mode to walk through your design and see it from every angle."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="text-center h-full border-none shadow-none bg-secondary/30">
                  <CardContent className="pt-12 pb-8 px-6 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-accent">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-2xl text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Split Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000" 
                alt="Room Planner Interface" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-serif text-4xl text-primary leading-tight">
                Professional Tools, <br/>
                <span className="text-accent">Simple to Use</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're redecorating a single room or planning a whole home makeover, our 3D Room Planner gives you the confidence to make the right choices.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Accurate measurements for a perfect fit",
                  "Experiment with different layouts instantly",
                  "Save multiple designs to compare options",
                  "Share your plans with family or our designers"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <a href="https://www.la-z-boy.com/content/Room-Planner-3D" target="_blank" rel="noopener noreferrer">
                    Launch Room Planner
                  </a>
                </Button>
                <Link href="/comfort-club">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Get Expert Help
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Need a Second Opinion?</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our certified design experts can review your room plan and offer personalized suggestions to elevate your space—completely free.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expert review of your 3D room plan",
                  "Personalized furniture recommendations",
                  "Fabric and color coordination advice",
                  "Tips for maximizing space and flow"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-none shadow-xl bg-white text-foreground">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="font-serif text-2xl text-primary">Book a Free Consultation</CardTitle>
                <p className="text-sm text-muted-foreground">Fill out the form below to request an appointment.</p>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First Name</label>
                      <input type="text" id="firstName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last Name</label>
                      <input type="text" id="lastName" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address <span className="text-destructive">*</span></label>
                    <input type="email" id="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone Number</label>
                    <input type="tel" id="phone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">How can we help?</label>
                    <textarea id="message" className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="I'm looking to redesign my living room..."></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-lg py-6 mt-4">
                    Request Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
