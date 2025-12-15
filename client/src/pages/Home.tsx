import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ArrowRight, Heart, ShieldCheck, Armchair } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/gallery-1.jpg" 
            alt="Cozy modern farmhouse living room with La-Z-Boy furniture" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-accent"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              Welcome to <br/>
              <span className="text-foreground">La-Z-Boy Home Furnishings & Decor!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
              Creating homes filled with comfort, style, and quality that lasts right here in Columbus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/comfort-club">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-serif text-lg px-8 py-6 h-auto cursor-pointer">
                  Join Comfort Club
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-serif text-lg px-8 py-6 h-auto bg-transparent" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner Introduction Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg z-0" />
              <img 
                src="/images/family-photo-real.jpg" 
                alt="The Evans Family - Owners of La-Z-Boy Columbus" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg z-20 max-w-xs hidden md:block">
                <p className="font-script text-2xl text-accent text-center">The Evans Family</p>
                <p className="text-xs text-center text-muted-foreground uppercase tracking-widest mt-1">Serving Columbus Since 2002</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                Hey Friends!
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We're the <span className="font-semibold text-foreground">Evans Family</span>, proud owners of your local La-Z-Boy store right here in Columbus since 2002.
                </p>
                <p>
                  For more than two decades, we've been committed to helping our neighbors create homes filled with comfort, style, and quality that lasts. Providing outstanding service has always been at the heart of what we do, and we're grateful for the chance to serve families across our community.
                </p>
                <p>
                  Beyond the showroom, we love being involved locally—supporting schools, teams, and events that make Columbus such a special place to call home.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/community">
                  <Button variant="link" className="text-accent hover:text-accent/80 p-0 text-lg font-serif italic cursor-pointer">
                    Read more about our community involvement <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Legacy Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Experience Comfort Redefined</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-accent" />,
                title: "Our Legacy",
                description: "We're more than just a store - we're a family. When you visit us, you become part of the La-Z-Boy Columbus extended family."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-accent" />,
                title: "Our Commitment",
                description: "Creating customers for life - one EXCEPTIONAL experience at a time. Our team works diligently to ensure you're satisfied."
              },
              {
                icon: <Armchair className="h-10 w-10 text-accent" />,
                title: "Quality & Style",
                description: "Discover furniture that blends timeless style with the legendary comfort La-Z-Boy is known for worldwide."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-secondary/20">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">Gallery</h2>
              <p className="text-muted-foreground text-lg">Explore Our Collection</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Full Catalog
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder images using unsplash since we don't have specific product shots yet */}
            {[
              { src: "/images/TD13a_Collins_610494_D180764_018.jpg", link: "https://www.la-z-boy.com/p/sofas/collins-sofa/_/R-610494", alt: "Collins Sofa" },
              { src: "/images/TD8_Ava_010769_C196552_009.jpg", link: "https://www.la-z-boy.com/p/recliners/ava-high-leg-reclining-chair/_/R-028932", alt: "Ava Recliner" },
              { src: "/images/TD26_Jay_U44706_C180964_065.jpg", link: "https://www.la-z-boy.com/p/recliners/jay-rocking-recliner/_/R-010706", alt: "Jay Recliner" },
              { src: "/images/TD23_Finley_10X747_D160632_001(1).jpg", link: "https://www.la-z-boy.com/p/recliners/finley-rocking-recliner/_/R-010747", alt: "Finley Recliner" },
              { src: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg", link: "https://www.la-z-boy.com/p/chairs/armitage-high-leg-reclining-chair/_/R-028812", alt: "Armitage Chair" },
              { src: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg", link: "https://www.la-z-boy.com/p/sofas/tahoe-sofa/_/R-610468", alt: "Tahoe Sofa" },
              { src: "/images/TD13e_Neo_10X-762_D201081_068.jpg", link: "https://www.la-z-boy.com/p/recliners/neo-rocking-recliner/_/R-010762", alt: "Neo Recliner" },
              { src: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg", link: "https://www.la-z-boy.com/p/sofas/trouper-reclining-sofa/_/R-440724", alt: "Trouper Sofa" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-lg shadow-md aspect-[4/3] relative cursor-pointer"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-serif text-lg font-bold transition-opacity duration-300 bg-black/40 px-4 py-2 rounded">
                      {item.alt}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-accent fill-accent mx-1" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-center font-light italic leading-relaxed mb-8">
                  "Jason let us look around the store and was available for questions. He gave us plenty of space to shop on our own. When we decided on a purchase, we came back the next day and bought the recliner. I am happy with the chair and Jason helped with the purchase and paperwork, explaining the details."
                </blockquote>
                <div className="text-center">
                  <cite className="not-italic font-bold text-lg font-serif tracking-wide">— Jerry Adams</cite>
                  <p className="text-sm opacity-80 mt-1">Verified Customer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Service Request</h2>
            <p className="text-muted-foreground">Need help with your furniture? Let us know how we can assist you.</p>
          </div>
          
          <Card className="shadow-lg border-muted">
            <CardContent className="p-8 md:p-10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                  <Input id="firstName" placeholder="Enter your first name" required className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                  <Input id="lastName" placeholder="Enter your last name" required className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" placeholder="Enter your email" required className="bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required className="bg-secondary/20" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">Tell us what you need help with... <span className="text-destructive">*</span></Label>
                  <Textarea id="message" placeholder="Describe your issue or request here" className="min-h-[120px] bg-secondary/20" required />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button type="submit" className="w-full md:w-auto md:min-w-[200px] bg-primary hover:bg-primary/90 text-white font-serif text-lg py-6">
                    Send Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
