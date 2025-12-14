import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for blog posts - in a real app this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: "choosing-perfect-recliner",
    title: "5 Tips for Choosing the Perfect Recliner",
    content: `
      <p class="mb-4">Finding the right recliner is about more than just comfort. It's about finding a piece that fits your body, your style, and your life. Here are our top 5 tips for selecting the perfect recliner for your home.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">1. Measure Your Space</h3>
      <p class="mb-4">Before you fall in love with a recliner, make sure it fits. Measure the width, depth, and height of the space where you plan to put it. Don't forget to account for the fully reclined length!</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">2. Consider Your Body Type</h3>
      <p class="mb-4">Recliners aren't one-size-fits-all. Your feet should touch the floor when sitting upright, and your head should be comfortably supported when reclined. We offer sizes from petite to tall to ensure the perfect fit.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">3. Choose Your Mechanism</h3>
      <p class="mb-4">Do you want a classic rocker recliner? A wall-hugger that saves space? Or a power recliner with infinite positions? Think about how you'll use the chair most often.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">4. Select Your Fabric</h3>
      <p class="mb-4">Leather offers a sleek look and durability, while performance fabrics are great for families with kids and pets. Consider the texture and color that will best complement your existing decor.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">5. Test It Out</h3>
      <p class="mb-4">The most important step! Come into our showroom and take a seat. Recline fully, sit upright, and see how it feels. Your body will tell you which one is right.</p>
    `,
    author: "Sarah Evans",
    date: "October 15, 2023",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800",
    category: "Furniture Guide",
    relatedProducts: [
      {
        id: "p1",
        name: "Trouper Recliner",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Recliners"
      },
      {
        id: "p2",
        name: "Collis Sofa",
        image: "/images/TD13a_Collins_610494_D180764_018.jpg",
        category: "Living Room"
      }
    ]
  },
  {
    id: 2,
    slug: "modern-farmhouse-look",
    title: "Modern Farmhouse: How to Get the Look",
    content: `
      <p class="mb-4">The modern farmhouse aesthetic strikes the perfect balance between rustic warmth and contemporary clean lines. It's comfortable, practical, and undeniably stylish. Here's how to bring this look into your Columbus home.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Neutral Color Palette</h3>
      <p class="mb-4">Start with a base of warm whites, creams, and soft greys. Add depth with accents of navy (like our brand color!), sage green, or terracotta. These natural tones create a calming atmosphere.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Mix Textures</h3>
      <p class="mb-4">Layering is key. Combine smooth leather with chunky knit throws, distressed wood with sleek metal accents. This contrast adds visual interest and coziness.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Practical Comfort</h3>
      <p class="mb-4">Modern farmhouse furniture should invite you to sit down and relax. Look for deep seats, plush cushions, and durable fabrics that can stand up to everyday life.</p>
    `,
    author: "Design Team",
    date: "September 28, 2023",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
    category: "Interior Design",
    relatedProducts: [
      {
        id: "p3",
        name: "Tahoe Sectional",
        image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
        category: "Sectionals"
      },
      {
        id: "p4",
        name: "Armitage Chair",
        image: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg",
        category: "Chairs"
      }
    ]
  },
  {
    id: 3,
    slug: "small-spaces-sectionals",
    title: "Maximizing Small Spaces with Sectionals",
    content: `
      <p class="mb-4">Many people think sectionals are only for large rooms, but they can actually be a great solution for smaller spaces too. It's all about choosing the right scale and configuration.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Define the Zone</h3>
      <p class="mb-4">A sectional naturally defines the seating area in an open-concept space. Use an area rug to further anchor the zone and create a cozy island of comfort.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Go Modular</h3>
      <p class="mb-4">Modular sectionals allow you to customize the layout to fit your specific dimensions. You can add or remove pieces as your needs change.</p>
    `,
    author: "Mike Johnson",
    date: "September 10, 2023",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    category: "Space Planning",
    relatedProducts: [
      {
        id: "p5",
        name: "Neo Sectional",
        image: "/images/TD13e_Neo_10X-762_D201081_068.jpg",
        category: "Sectionals"
      },
      {
        id: "p6",
        name: "Finley Recliner",
        image: "/images/TD23_Finley_10X747_D160632_001(1).jpg",
        category: "Recliners"
      }
    ]
  },
  {
    id: 4,
    slug: "performance-fabrics-benefits",
    title: "The Benefits of Performance Fabrics",
    content: `
      <p class="mb-4">For busy households, performance fabrics are a lifesaver. They resist stains, repel liquids, and are easy to clean, keeping your furniture looking new for years.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Stain Resistance</h3>
      <p class="mb-4">Spilled wine? Muddy paws? No problem. Most messes can be wiped away with a damp cloth thanks to the protective technology woven into the fibers.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Durability</h3>
      <p class="mb-4">Performance fabrics are tested to withstand heavy use. They resist pilling, fading, and abrasion, making them ideal for high-traffic family rooms.</p>
    `,
    author: "Sarah Evans",
    date: "August 22, 2023",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    category: "Materials",
    relatedProducts: [
      {
        id: "p7",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas"
      },
      {
        id: "p8",
        name: "Jay Recliner",
        image: "/images/TD26_Jay_U44706_C180964_065.jpg",
        category: "Recliners"
      }
    ]
  }
];

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-serif text-primary mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end pb-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-white"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm md:text-base text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Sidebar / Related Products */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-secondary/30 p-6 rounded-xl sticky top-24">
            <h3 className="font-serif text-2xl text-primary mb-6 flex items-center gap-2">
              <Tag className="h-5 w-5 text-accent" />
              Related Products
            </h3>
            <div className="space-y-6">
              {post.relatedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
                      {product.category}
                    </div>
                    <h4 className="font-serif text-lg text-primary font-medium">
                      {product.name}
                    </h4>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary hover:text-white">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-serif text-xl text-primary mb-4">Need Design Help?</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Our design experts can help you find the perfect pieces for your home.
              </p>
              <Link href="/comfort-club">
                <Button className="w-full bg-primary text-white">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
