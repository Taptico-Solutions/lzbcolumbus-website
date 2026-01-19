import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

// Mock data for blog posts - in a real app this would come from an API or CMS
const blogPosts = [
  {
    id: 5,
    slug: "la-z-boy-rebrand-2025",
    title: "La-Z-Boy Gets Comfy with Its Biggest Rebrand in 22 Years",
    content: `
      <p class="mb-4">La-Z-Boy, the iconic purveyor of recliners and accidental napping, has finally got round to rebranding, and it’s a big one. With help from creative agency Colle McVoy, the company just pulled off its first major identity refresh in over two decades.</p>
      
      <p class="mb-4">This is a full reimagining of what La-Z-Boy stands for, shifting from “dad chair in a dusty showroom” to a lifestyle brand rooted in wellness and softness. The timing couldn’t be better. With their 100th anniversary on the horizon in 2027 and the world still deep in its love affair with loungewear, La-Z-Boy is smartly claiming its spot as the high priest of laid-back living.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Comfort is No Longer a Guilty Pleasure</h3>
      <p class="mb-4">For years, La-Z-Boy was shorthand for… well, laziness. Whether it was Chandler and Joey fighting over the recliner on Friends or your uncle snoozing through Sunday football, the brand was baked into pop culture, just not in a way most marketers would shout about.</p>
      <p class="mb-4">But Colle McVoy spotted the opportunity. Instead of running from the brand’s history, they’ve embraced it. They doubled down on comfort and reframed it as a modern wellness essential. This isn’t about zoning out in front of the telly. It’s about creating a personal sanctuary. An “ahhh place,” as the new brand line puts it.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">The New Logo is Soft in All The Right Places</h3>
      <p class="mb-4">The old La-Z-Boy logo design was doing the bare minimum. Corporate, cold, and very much stuck in the early 2000s. The new one? With its soft curves and subtle movement, it’s clearly inspired by the original 1927 logo. The refreshed wordmark feels like it’s just finished a deep stretch and sunk into a cloud.</p>
      <p class="mb-4">Each letterform has been shaped to mimic the feeling of sinking into your favourite chair, with gentle tilts and pillowy terminals that make the whole thing feel tactile before you’ve even touched a cushion. And yes, the hyphens are back.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">A Brand You Can Feel</h3>
      <p class="mb-4">This rebrand is designed to feel comfy. The colour palette leans into nature, with calming forest greens and a burnt vermilion that feels like firelight. Typography-wise, the combo of Bookmania and Gotham brings together the old and the new, the warm and the structured.</p>
      <p class="mb-4">From UX design and showroom layouts to packaging and photography, the entire experience has been crafted to feel unhurried and intuitive. Layouts are spacious, messaging is clear, and every touchpoint is another nudge to relax.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Rest is in, and La-Z-Boy Owns it</h3>
      <p class="mb-4">While other heritage brands are busy chasing youth and relevance with influencer deals and viral gimmicks, La-Z-Boy is doing something smarter. It’s staying in its lane and turning it into a comfort highway. Post-Covid, people aren’t just staying home; they’re choosing home.</p>
      <p class="mb-4">With slogans like “Tailored for your time off” and “Life’s better laid back,” the brand is reclaiming rest as something aspirational. No guilt. No grind. Just intentional calm (with nice branding).</p>
    `,
    author: "Design Team",
    date: "August 4, 2025",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    category: "Brand News",
    relatedProducts: [
      {
        id: "p1",
        name: "Trouper Recliner",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Recliners"
      },
      {
        id: "p7",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas"
      }
    ]
  },
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
    image: "/images/pinnacle-power-lift-recliner.jpg",
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
        name: "Morrison Recliner",
        image: "/images/gallery-grey-recliner.jpg",
        category: "Recliners"
      },
      {
        id: "p3",
        name: "Jasper Recliner",
        image: "/images/greyson-rocking-recliner.jpg",
        category: "Recliners"
      }
    ]
  },
  {
    id: 2,
    slug: "2026-living-room-trends",
    title: "2026 Living Room Trends: Soft Modern",
    content: `
      <p class="mb-4">Say goodbye to stark minimalism. 2026 is all about "Soft Modern"—a design philosophy that prioritizes comfort without sacrificing style. It's warm, inviting, and perfect for real life.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Curved Silhouettes</h3>
      <p class="mb-4">Sharp edges are out; curves are in. Look for sofas with rounded arms, circular coffee tables, and arched mirrors. These shapes soften the room and improve flow.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Warm Neutrals</h3>
      <p class="mb-4">Grey is warming up. Think "greige," taupe, oatmeal, and warm white. These shades create a cozy backdrop that feels fresh but not sterile.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Tactile Textures</h3>
      <p class="mb-4">Bouclé, velvet, and chunky knits are huge this year. Mixing textures adds depth and interest to a neutral palette, making the space feel rich and layered.</p>
    `,
    author: "Design Team",
    date: "January 10, 2026",
    image: "/images/gallery-1.jpg",
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
      <p class="mb-4">Think you don't have room for a sectional? Think again. A well-chosen sectional can actually make a small room feel larger by streamlining the seating and reducing visual clutter.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Choose the Right Scale</h3>
      <p class="mb-4">Look for "apartment-sized" or modular sectionals with slimmer profiles. Avoid overstuffed arms or deep backs that eat up valuable floor space.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Use the Corner</h3>
      <p class="mb-4">Tucking a sectional into a corner frees up the center of the room for traffic flow. It maximizes every inch of square footage.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Keep it Light</h3>
      <p class="mb-4">Lighter fabrics reflect light and make the piece feel less heavy. Legs that lift the sofa off the floor also help create a sense of openness.</p>
    `,
    author: "Mike Johnson",
    date: "September 10, 2023",
    image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
    category: "Space Planning",
    relatedProducts: [
      {
        id: "p5",
        name: "Trouper Sectional",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Sectionals"
      },
      {
        id: "p6",
        name: "Tahoe Sectional",
        image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
        category: "Sectionals"
      }
    ]
  },
  {
    id: 4,
    slug: "performance-fabrics-benefits",
    title: "The Benefits of Performance Fabrics on La-Z-Boy Upholstered Furniture",
    content: `
      <p class="mb-4">When you invest in La-Z-Boy upholstered furniture, choosing performance fabrics like iClean™ can make everyday living easier and more enjoyable. Built to handle real life in family homes, these high-performance textiles combine comfort, durability, and easy care. Here are five key features and benefits that set them apart:</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">1. Advanced Stain Resistance</h3>
      <p class="mb-4">La-Z-Boy’s iClean™ fabric uses innovative technology that surrounds each fiber with a protective barrier, repelling common household spills before they become stains. Everyday messes like coffee, wine, juice, dirt, and more can simply be blotted away — no scrubbing required in many cases.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">2. Easy Maintenance</h3>
      <p class="mb-4">Performance fabrics are designed for hassle-free cleaning. Most spills stay on the surface long enough to be wiped off with a soft cloth or paper towel. For tougher messes, a mild soap and water solution is usually all you need, helping you keep furniture looking fresh with minimal effort.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">3. Soft, Comfortable Feel</h3>
      <p class="mb-4">Despite their robust performance, these fabrics don’t sacrifice comfort. iClean™ textiles remain soft to the touch and maintain the cozy feel you expect from La-Z-Boy upholstery, making them ideal for family lounging or relaxed evenings with guests.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">4. Wide Style Variety</h3>
      <p class="mb-4">La-Z-Boy offers a broad selection of performance fabric options in many colors, textures, and patterns. This gives you the flexibility to match your décor while still enjoying the benefits of high-performance upholstery.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">5. Peace of Mind with Warranty Protection</h3>
      <p class="mb-4">Performance fabrics like iClean™ are backed by a manufacturer warranty — typically up to three years for covered stains — giving extra reassurance that your furniture is protected against everyday spills and accidents.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Who It’s Best For:</h3>
      <p class="mb-4">Families with kids, pet owners, and anyone who wants beautiful furniture without the worry of daily accidents will appreciate the practical advantages of performance fabrics on La-Z-Boy pieces. Whether you’re upgrading a recliner or choosing a new sofa, these fabrics help keep your home looking great with less stress.</p>
    `,
    author: "Sarah Evans",
    date: "August 22, 2023",
    image: "/images/TD13a_Collins_610494_D180764_018.jpg",
    category: "Materials",
    relatedProducts: [
      {
        id: "p7",
        name: "Collins Sofa",
        image: "/images/TD13a_Collins_610494_D180764_018.jpg",
        category: "Sofas"
      },
      {
        id: "p8",
        name: "Leah Sleep Sofa",
        image: "/images/TD28e_Leah_555-418_D206893.jpg",
        category: "Sleep Sofas"
      }
    ]
  },
  {
    id: 6,
    slug: "easy-room-refresh-accessories",
    title: "Easy Ways to Refresh Your Room by Swapping Accessories",
    content: `
      <p class="mb-4">If your room is feeling a little tired but a full makeover isn’t in the cards, accessories are your secret weapon. Small changes can make a big impact—without the time or cost of replacing furniture. Here are a few simple ways to update your space just by changing out the finishing touches.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">1. Update Your Pillows and Throws</h3>
      <p class="mb-4">Decorative pillows and throws are one of the quickest ways to refresh a room. Try new textures like bouclé, velvet, or woven fabrics, or switch up colors seasonally. Even mixing in one or two new patterns can instantly give your sofa or chair a whole new look.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">2. Swap Lampshades or Lighting Accents</h3>
      <p class="mb-4">Lighting plays a huge role in how a room feels. Replacing a lampshade, updating bulb warmth, or adding a small accent lamp can completely change the mood—making a space feel cozier, brighter, or more modern.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">3. Layer in New Area Rugs</h3>
      <p class="mb-4">An area rug can anchor a room and pull everything together. Changing the rug—or layering a smaller rug over an existing one—adds warmth, texture, and personality while helping define seating areas.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">4. Refresh Wall Decor</h3>
      <p class="mb-4">Try rearranging artwork, adding a mirror, or introducing framed prints in new finishes. Even swapping frames from black to brass or wood can make existing art feel brand new.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">5. Style with Accessories That Tell a Story</h3>
      <p class="mb-4">Trays, books, greenery, and decorative objects bring personality into a room. Group items in odd numbers and vary heights for a designer-styled look. Rotating accessories from room to room can also give everything a fresh perspective.</p>
    `,
    author: "Design Team",
    date: "January 15, 2026",
    image: "/images/gallery/blue-grey-living-room-1.png",
    category: "Decor Tips",
    relatedProducts: [
      {
        id: "p9",
        name: "Decorative Pillows",
        image: "/images/gallery-1.jpg",
        category: "Accessories"
      },
      {
        id: "p10",
        name: "Area Rugs",
        image: "/images/project-upload/IMG_7226.jpg",
        category: "Rugs"
      }
    ]
  }
];

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  if (!match) return null;
  
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-serif text-primary mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white space-y-4">
            <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium uppercase tracking-wider mb-4">
              {post.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 mt-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share / Tags */}
            <div className="border-t border-border mt-12 pt-8 flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Share Article</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Shop This Look</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {post.relatedProducts.map((product) => (
                  <div key={product.id} className="flex gap-4 items-center group cursor-pointer">
                    <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary group-hover:text-accent transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link href="/comfort-club">
                  <Button className="w-full">Book a Design Consultation</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Newsletter */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Join the Club</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 mb-4">
                  Get more design tips and exclusive offers delivered to your inbox.
                </p>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                      Subscribe Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Join the Comfort Club</DialogTitle>
                      <DialogDescription>
                        Subscribe to our newsletter for the latest design trends and exclusive offers.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4 mt-4" onSubmit={(e) => {
                      e.preventDefault();
                      setIsDialogOpen(false);
                    }}>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <input 
                          id="email"
                          type="email" 
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Subscribe</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
