import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Tamika",
    role: "Design Consultant",
    image: "/images/team/7D31863D-AF57-4D1F-9D46-63B35109193A.jpeg",
    bio: "Tamika is patient, thoughtful, and incredibly good at picking up on the details that matter most to you. Customers often comment on how well she listens and how confident they feel after working with her. Whether it’s fabric durability, comfort preferences, or coordinating pieces, she has a knack for putting it all together. Bonus: she makes the process genuinely enjoyable."
  },
  {
    id: 2,
    name: "Bret",
    role: "Design Consultant",
    image: "/images/team/2DB57321-F7BF-4810-80BC-ED5F81D09E23.jpeg",
    bio: "Bret has mastered the art of giving you space without disappearing. Customers appreciate his calm, no-pressure approach and his ability to jump in with the perfect suggestion right when you need it. He knows La-Z-Boy inside and out and is especially good at helping people narrow down options without overwhelm. Shopping with Bret feels easy — like it should."
  },
  {
    id: 3,
    name: "Casey",
    role: "Interior Designer",
    image: "/images/team/1EFC803C-5257-4B20-8CF3-1D8E0715AE62.jpeg",
    bio: "Casey is our space-planning wizard and design problem-solver. Awkward room layout? Too many doors? Furniture that never quite fits? Casey lives for this stuff. She helps customers visualize their space, choose the right scale, and create rooms that actually work — not just look good online. If your room suddenly makes sense and feels finished, Casey probably had something to do with it."
  },
  {
    id: 4,
    name: "Jason",
    role: "Design Consultant",
    image: "/images/team/38AF3243-C28A-4C87-8A03-727829B6D97A.jpeg",
    bio: "Jason is the guy customers trust when they want real answers, not sales talk. He’s known for taking his time, listening carefully, and helping people land on furniture that actually fits their lifestyle — not just their living room. Shoppers regularly mention how relaxed the experience felt, which Jason considers the highest compliment. If you leave confident in your decision, he’s done his job."
  },
  {
    id: 5,
    name: "Kenneth",
    role: "Design Consultant",
    image: "/images/team/F2B8B66A-3926-4FC6-BA25-3F9704D8865D.jpeg",
    bio: "Kenneth brings great energy, real talk, and a genuine love for helping people get comfortable. Customers appreciate his honesty and easygoing style — no upselling, no pressure, just good guidance. He’s especially good at helping people compare options and understand what features they’ll actually use. Expect smiles, laughs, and a chair you don’t want to get out of."
  },
  {
    id: 6,
    name: "Marlon",
    role: "Store Manager",
    image: "/images/team/8BB8A7C8-045A-4297-993D-F600075145BA.jpeg",
    bio: "Marlon keeps the whole operation running smoothly while making sure the store feels welcoming, relaxed, and friendly. Customers often comment on the positive atmosphere — and that starts at the top. He believes furniture shopping should be enjoyable, not stressful, and leads the team with that mindset every day. If your experience feels easy and comfortable, Marlon would say that’s exactly the point."
  },
  {
    id: 7,
    name: "Aulashua (Smoot)",
    role: "Design Consultant",
    image: "/images/team/310CD491-85C6-4A9E-AEED-B7052F45A422.jpeg",
    bio: "Known around the showroom as “Smoot,” Aulashua has a gift for making people feel comfortable before they even sit down. Customers often mention how fun and easy their experience was — which is no accident. He’s especially skilled at matching people with recliners they didn’t know they needed, but will soon refuse to give up. Expect laughs, honest advice, and at least one “okay wow, this is comfortable” moment."
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
              Furniture shopping should feel comfortable — and so should the people helping you do it. 
              Our team at La-Z-Boy Columbus is made up of experienced listeners, space-planning pros, 
              and comfort enthusiasts who genuinely enjoy helping you find what works for your home. 
              No pressure, no rushing, no “salesy” vibes — just real people, real advice, and a lot 
              of sitting down along the way.
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
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 text-center flex-grow flex flex-col">
                    <h3 className="font-serif text-2xl text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-4 uppercase tracking-wide text-sm">{member.role}</p>
                    <p className="text-muted-foreground mb-6 flex-grow">{member.bio}</p>

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
