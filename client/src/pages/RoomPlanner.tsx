import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TransformationGallery } from "@/components/TransformationGallery";
import { ArrowRight, Layout, Monitor, MousePointerClick } from "lucide-react";
import { Link } from "wouter";

export default function RoomPlanner() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/room-planner-hero-family.jpg" 
            alt="Virtual Room Planner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
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
          </div>
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

          <div className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-white p-4 border-b">
              <h3 className="font-serif text-xl text-primary">Project 1: The Dorian Living Room</h3>
            </div>
            <BeforeAfterSlider 
              beforeImage="/images/project-upload/IMG_7228_empty.png" 
              afterImage="/images/project-upload/IMG_7228.jpg" 
              beforeLabel="Before (Empty Room)"
              afterLabel="After (La-Z-Boy Design)"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-20 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-white p-4 border-b">
              <h3 className="font-serif text-xl text-primary">Project 2: Cozy Family Retreat</h3>
            </div>
            <BeforeAfterSlider 
              beforeImage="/images/project-upload-2/IMG_4318_empty.png" 
              afterImage="/images/project-upload-2/IMG_4318.jpg" 
              beforeLabel="Before (AI Generated Empty Room)"
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0csx9RMCUF8" 
                title="How to Decorate a Room | La-Z-Boy 3D Room Planner" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/8YC8NIANtN4" 
                title="How to Design a Mid-Century Modern Living Room" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
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
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Split Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/hero/room-planner-family.jpg" 
                alt="Family enjoying their La-Z-Boy living room" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-8">
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
            </div>
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
                  "Access to exclusive in-store options"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://www.la-z-boy.com/design-services/request" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-none text-lg px-8">
                  Request Design Review
                </Button>
              </a>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/images/gallery/blue-grey-living-room-1.png" 
                alt="La-Z-Boy Design Expert working with a client" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
