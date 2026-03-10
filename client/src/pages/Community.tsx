import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Trophy, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Community() {
  const charityOrgs = [
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
      logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/FuXfUcoFDqVvBbgg.png",
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
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/pWFePvddMjOltOuv.jpg" 
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Commitment to Columbus</h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              As a locally owned business since 2002, we're dedicated to supporting the schools, teams, and organizations that make the Chattahoochee Valley a wonderful place to live.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED SPORTS PARTNERSHIPS ─────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Sports Partnerships</h2>
            <p className="text-lg text-muted-foreground">
              From the diamond to the gym floor, we're proud to invest in the young athletes of Columbus and the Chattahoochee Valley.
            </p>
          </div>

          {/* Columbus Clingstones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[280px]">
                  <img 
                    src="/images/clingstones-field.jpg"
                    alt="Columbus Clingstones at Synovus Park"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#E8622A] text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                      Official Sponsor
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/images/clingstones-logo.jpg"
                      alt="Columbus Clingstones logo"
                      className="h-16 w-auto object-contain"
                    />
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary leading-tight">Columbus Clingstones</h3>
                      <p className="text-sm text-muted-foreground">Double-A Affiliate of the Atlanta Braves · Synovus Park</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Columbus Clingstones are Columbus, Georgia's own Minor League Baseball team — the Double-A affiliate of the Atlanta Braves — playing their home games at Synovus Park right here in the Chattahoochee Valley. La-Z-Boy of Columbus is a proud sponsor of the Clingstones and the <strong>"La-Z-Boy of Columbus Player of the Week"</strong> award, recognizing standout performances throughout the season.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In 2026, we partnered with the Clingstones to launch the <strong>"Clingstones Field of Dreams Team" program</strong> — inviting local youth baseball and softball teams to take the field alongside Clingstones players before all 69 home games. As Susan Evans put it: <em>"Our own kids play baseball here in Columbus, and we've experienced firsthand how special those on-field moments can be."</em>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="https://www.milb.com/columbus-clingstones" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-serif">
                        Visit Clingstones.com <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://www.milb.com/columbus-clingstones/news/clingstones-and-la-z-boy-of-columbus-combine-to-offer-local-youths-their-own-field-of-dreams" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                        Read the Field of Dreams Story
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* American Little League & Gymnastics Unlimited — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* American Little League */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden bg-[#00205B] flex items-center justify-center">
                  <img 
                    src="/images/american-little-league-logo.png"
                    alt="American Little League Columbus GA logo"
                    className="h-36 w-auto object-contain p-4"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#C8102E] text-white text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full">
                      Est. 1951
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                    American Little League
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-accent" />
                    Double Churches Park · 2300 Double Churches Rd, Columbus, GA 31904
                  </p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in <strong>1951</strong>, American Little League is one of Columbus, Georgia's longest-running youth sports organizations. Part of <strong>Georgia District 8</strong>, the league provides baseball and softball programs for children across the city, teaching teamwork, sportsmanship, and the values of character, courage, and loyalty.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    American Little League serves families in the Double Churches Road area and was the <strong>2025 Georgia State 9-11 Baseball Tournament host</strong> — a testament to the league's standing in the state. Registration is open each spring and fall for players of all skill levels.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Users className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">Baseball &amp; Softball · Ages 4–16 · Spring &amp; Fall Seasons</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-8">
                  <a href="https://www.americanlittleleague.org/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-white transition-colors border-primary text-primary bg-transparent">
                      Visit Their Website <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Gymnastics Unlimited */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/images/gymnastics-unlimited-gym.jpg"
                    alt="Gymnastics Unlimited Columbus GA facility"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white text-xs font-bold tracking-wider uppercase px-2 py-1 rounded-full">
                      Est. 1984
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors">
                    Gymnastics Unlimited
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Star className="h-4 w-4 text-accent" />
                    4368 Warm Springs Rd, Columbus, GA 31909 · (706) 563-1866
                  </p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Established in <strong>1984 by Coach Doug James</strong> (an Auburn University graduate), Gymnastics Unlimited has been developing young athletes in Columbus for over 40 years. Their <strong>20,000+ sq ft facility</strong> on Warm Springs Road is fully equipped with men's and women's Olympic apparatus, trampolines, training pits, and age-appropriate equipment for children as young as 18 months.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Programs range from <strong>Hot Tots</strong> (parent-child classes, 18 months–2 yrs) and <strong>Little Gym</strong> (ages 2–4) to full <strong>Boys' &amp; Girls' Artistic Gymnastics</strong> and <strong>Tumbling</strong> classes (ages 5–18). Tumbling classes are especially popular with current and future cheerleaders.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Users className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">Ages 18 months – 18 years · Mon–Thu 9am–8pm · Fri 9am–6pm</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 pb-8">
                  <a href="https://www.gymunlimitedga.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-white transition-colors border-primary text-primary bg-transparent">
                      Visit Their Website <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHARITY & NONPROFIT PARTNERS ─────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Charity &amp; Nonprofit Partners</h2>
            <p className="text-lg text-muted-foreground">
              We are proud to support these incredible local organizations that serve our neighbors every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {charityOrgs.map((org, index) => (
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
                      <Button variant="outline" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-white transition-colors border-primary text-primary bg-transparent">
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
          <a href="tel:7066531070">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-serif text-lg px-8 py-6">
              Call Us: (706) 653-1070
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
