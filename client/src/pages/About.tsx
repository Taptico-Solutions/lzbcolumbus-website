import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, Phone, Award, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/family-photo-real.jpg" 
            alt="The Evans Family - Owners of La-Z-Boy Columbus" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase rounded-full mb-4">
              Locally Owned & Operated Since 2002
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              About La-Z-Boy of <br/>
              <span className="text-foreground">Columbus, Georgia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              More than just a furniture store, we are a local family business dedicated to bringing comfort and quality to homes across the Chattahoochee Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                The Evans Family Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 2002, the Evans family opened the doors to La-Z-Boy of Columbus with a simple mission: to offer our neighbors in Columbus, Phenix City, and the surrounding areas a better way to shop for furniture.
                </p>
                <p>
                  As an independent, locally owned retailer, we combine the world-class quality of the La-Z-Boy brand with the personal care and commitment of a hometown business. When you shop with us, you aren't just buying a sofa or a recliner—you're supporting a local team that lives, works, and gives back right here in the Chattahoochee Valley.
                </p>
                <p>
                  Over the last two decades, we've had the privilege of furnishing thousands of local homes, but our proudest achievements are the relationships we've built with our customers and our community.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Family Owned</p>
                    <p className="text-sm text-muted-foreground">Since 2002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Community Focused</p>
                    <p className="text-sm text-muted-foreground">Local Partnerships</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent rounded-lg z-0" />
              <img 
                src="/images/store-front-real.jpg" 
                alt="La-Z-Boy Columbus Storefront" 
                className="relative z-10 rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            Serving the Entire Chattahoochee Valley
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            While our showroom is located in Columbus, our delivery teams are on the road every day bringing comfort to families throughout the region. We are proud to serve:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-left md:text-center">
            {[
              "Columbus, GA", "Phenix City, AL", "Fortson, GA", 
              "Midland, GA", "Harris County, GA", "Auburn / Opelika, AL",
              "Smiths Station, AL", "Ellerslie, GA", "Cataula, GA"
            ].map((city, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Visit Our Showroom</h3>
              <p className="opacity-90">
                5555 Whittlesey Blvd, Bldg 1<br/>
                Columbus, GA 31909
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Call Us</h3>
              <p className="opacity-90">
                (706) 653-1070
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Store Hours</h3>
              <p className="opacity-90">
                Mon-Sat: 10am - 7pm<br/>
                Sun: 12:30pm - 5pm
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/community">
              <Button size="lg" variant="secondary" className="font-serif text-lg px-8">
                See Our Community Impact <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
