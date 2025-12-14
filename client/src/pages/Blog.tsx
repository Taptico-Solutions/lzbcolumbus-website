import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Tips for Choosing the Perfect Recliner",
      excerpt: "Finding the right recliner is about more than just comfort. Learn how to select the perfect style, size, and fabric for your living space.",
      author: "Sarah Evans",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800",
      category: "Furniture Guide"
    },
    {
      id: 2,
      title: "Modern Farmhouse: How to Get the Look",
      excerpt: "Discover the key elements of the modern farmhouse aesthetic, from neutral color palettes to rustic textures and cozy accents.",
      author: "Design Team",
      date: "September 28, 2023",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
      category: "Interior Design"
    },
    {
      id: 3,
      title: "Maximizing Small Spaces with Sectionals",
      excerpt: "Think you don't have room for a sectional? Think again. Here are creative ways to arrange sectionals in smaller living rooms.",
      author: "Mike Johnson",
      date: "September 10, 2023",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
      category: "Space Planning"
    },
    {
      id: 4,
      title: "The Benefits of Performance Fabrics",
      excerpt: "Life happens. Learn why performance fabrics are a game-changer for families with kids and pets, offering durability without sacrificing style.",
      author: "Sarah Evans",
      date: "August 22, 2023",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      category: "Materials"
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
                    <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-accent hover:bg-transparent group/btn">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
