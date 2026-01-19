import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
    }, 1000);
  };
  const posts = [
    {
      id: 5,
      slug: "la-z-boy-rebrand-2025",
      title: "La-Z-Boy Gets Comfy with Its Biggest Rebrand in 22 Years",
      excerpt: "La-Z-Boy ditches the 'dad chair' vibes in its first major rebrand in over two decades, embracing comfort as a modern wellness essential.",
      author: "Design Team",
      date: "August 4, 2025",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
      category: "Brand News"
    },
    {
      id: 1,
      slug: "choosing-perfect-recliner",
      title: "5 Tips for Choosing the Perfect Recliner",
      excerpt: "Finding the right recliner is about more than just comfort. Learn how to select the perfect style, size, and fabric for your living space.",
      author: "Sarah Evans",
      date: "October 15, 2023",
      image: "/images/pinnacle-power-lift-recliner.jpg",
      category: "Furniture Guide"
    },
    {
      id: 2,
      slug: "2026-living-room-trends",
      title: "2026 Living Room Trends: Soft Modern",
      excerpt: "Say goodbye to stark minimalism. This year is all about soft curves, warm neutrals, and spaces that feel as good as they look.",
      author: "Design Team",
      date: "January 10, 2026",
      image: "/images/gallery-1.jpg",
      category: "Interior Design"
    },
    {
      id: 3,
      slug: "small-spaces-sectionals",
      title: "Maximizing Small Spaces with Sectionals",
      excerpt: "Think you don't have room for a sectional? Think again. Here are creative ways to arrange sectionals in smaller living rooms.",
      author: "Mike Johnson",
      date: "September 10, 2023",
      image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
      category: "Space Planning"
    },
    {
      id: 4,
      slug: "performance-fabrics-benefits",
      title: "The Benefits of Performance Fabrics",
      excerpt: "Life happens. Learn why performance fabrics are a game-changer for families with kids and pets, offering durability without sacrificing style.",
      author: "Sarah Evans",
      date: "August 22, 2023",
      image: "/images/TD13a_Collins_610494_D180764_018.jpg",
      category: "Materials"
    },
    {
      id: 6,
      slug: "easy-room-refresh-accessories",
      title: "Easy Ways to Refresh Your Room by Swapping Accessories",
      excerpt: "If your room is feeling a little tired but a full makeover isn't in the cards, accessories are your secret weapon. Small changes can make a big impact.",
      author: "Design Team",
      date: "January 15, 2026",
      image: "/images/gallery/blue-grey-living-room-1.png",
      category: "Decor Tips"
    },
    {
      id: 7,
      slug: "reasons-to-work-with-designer",
      title: "Reasons to Work with a La-Z-Boy Designer on Your Next Room",
      excerpt: "Designing a room can feel overwhelming, but it doesn't have to be. Discover how expert guidance can turn your ideas into a comfortable, cohesive space.",
      author: "Design Team",
      date: "January 20, 2026",
      image: "/images/hero/room-planner-family.jpg",
      category: "Design Services"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
              Design & Inspiration
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Expert tips, trends, and guides to help you create a home you love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-2xl text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-accent hover:bg-transparent group/btn">
                        Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl">
              Get Design Tips Delivered
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Join our newsletter for the latest trends, exclusive offers, and expert advice from our design team.
            </p>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 rounded-lg p-6 flex flex-col items-center gap-3"
              >
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="text-xl font-medium">Thanks for subscribing!</h3>
                <p className="text-sm text-white/80">Check your inbox for your welcome guide.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required
                  className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white border-none">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
