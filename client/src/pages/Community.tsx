import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HeartHandshake, Home, PawPrint, Building } from "lucide-react";
import { motion } from "framer-motion";

export default function Community() {
  const organizations = [
    {
      title: "Family House of West Georgia",
      description: "The Family House of West Georgia provides overnight accommodations for medical patients visiting Columbus, Georgia for extended healthcare treatment.",
      logo: "/images/logo-family-house.jpg",
      image: "/images/family-house-building.jpg",
      link: "https://www.fhwga.com/"
    },
    {
      title: "Humane Society of Harris County",
      description: "Founded in 1991, this nonprofit organization finds loving homes for animals in need.",
      logo: "/images/logo-humane-society.png",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
      link: "https://www.hsharrisco.org/"
    },
    {
      title: "Habitat for Humanity",
      description: "Habitat for Humanity is about bringing people together to build homes, communities, and hope. Monetary donations or donating to the ReStore.",
      logo: "/images/logo-habitat.png",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
      link: "https://www.columbusareahabitat.com/"
    },
    {
      title: "Valley Rescue Mission",
      description: "Since 1963, Valley Rescue Mission has provided emergency shelter and meals for the homeless, substance abuse recovery programs, and community outreach.",
      logo: "/images/logo-valley-rescue.png",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800",
      link: "https://www.valleyrescuemission.org/"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/community-hero.jpg" 
            alt="Community involvement" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Community</h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              We love being involved locally—supporting schools, teams, and events that make Columbus such a special place to call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {organizations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={org.image} 
                      alt={org.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <a 
                      href={org.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md h-16 w-16 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-10"
                      title={`Visit ${org.title} website`}
                    >
                      <img src={org.logo} alt={`${org.title} logo`} className="max-h-full max-w-full object-contain" />
                    </a>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                      {org.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {org.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0 pb-8">
                    <a href={org.link} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-white transition-colors border-primary text-primary">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Know a Cause We Should Support?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            We're always looking for new ways to give back to our Columbus community. Reach out to us with your suggestions!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-serif text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
