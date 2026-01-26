import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Team member data with the uploaded images
const teamMembers = [
  {
    id: 1,
    name: "Design Consultant",
    role: "Interior Design Expert",
    image: "/images/team/310CD491-85C6-4A9E-AEED-B7052F45A422.jpeg",
    bio: "Passionate about creating spaces that reflect your personal style and comfort needs."
  },
  {
    id: 2,
    name: "Design Consultant",
    role: "Interior Design Expert",
    image: "/images/team/8BB8A7C8-045A-4297-993D-F600075145BA.jpeg",
    bio: "Specializes in space planning and color coordination to bring your vision to life."
  },
  {
    id: 3,
    name: "Bret",
    role: "Design Consultant",
    image: "/images/team/2DB57321-F7BF-4810-80BC-ED5F81D09E23.jpeg",
    bio: "Dedicated to helping you find the perfect furniture pieces for your home and lifestyle."
  },
  {
    id: 4,
    name: "Kenneth",
    role: "Design Consultant",
    image: "/images/team/F2B8B66A-3926-4FC6-BA25-3F9704D8865D.jpeg",
    bio: "Expert in combining functionality with aesthetics to create beautiful, livable rooms."
  },
  {
    id: 5,
    name: "Jason",
    role: "Design Consultant",
    image: "/images/team/38AF3243-C28A-4C87-8A03-727829B6D97A.jpeg",
    bio: "Here to guide you through our extensive collection and customization options."
  },
  {
    id: 6,
    name: "Design Consultant",
    role: "Interior Design Expert",
    image: "/images/team/1EFC803C-5257-4B20-8CF3-1D8E0715AE62.jpeg",
    bio: "Loves helping clients transform their houses into homes with personalized design solutions."
  },
  {
    id: 7,
    name: "Design Consultant",
    role: "Interior Design Expert",
    image: "/images/team/7D31863D-AF57-4D1F-9D46-63B35109193A.jpeg",
    bio: "Focused on understanding your unique needs to create a space you'll love for years to come."
  }
];

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-12 md:py-20">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Meet Our Design Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our certified design experts are here to help you create a home that's uniquely yours. 
              From finding the perfect recliner to redesigning an entire room, we're with you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-serif text-2xl text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-4 uppercase tracking-wide text-sm">{member.role}</p>
                    <p className="text-muted-foreground mb-6">{member.bio}</p>
                    <Button variant="outline" className="w-full gap-2 group">
                      <Mail className="h-4 w-4 group-hover:text-accent transition-colors" />
                      Contact {member.name === "Design Consultant" ? "Me" : member.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with one of our designers today. We'll help you bring your vision to life, 
            whether it's a single room refresh or a whole-home makeover.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/room-planner">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Request Design Review
              </Button>
            </Link>
            <Link href="/general-questions">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
