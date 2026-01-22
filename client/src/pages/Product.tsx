import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Mock data for products - same as in Category.tsx
const products = [
  {
    id: "p1",
    name: "Trouper Recliner",
    image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
    category: "Recliners",
    price: "$899",
    description: "The Trouper Recliner is the perfect spot to relax after a long day. With a sculpted bucket seat and split back cushion, it provides soft support for your head, neck, and lumbar. The chaise legrest gives you plenty of room to stretch out.",
    features: [
      "Sculpted bucket seat",
      "Split back cushion for support",
      "Chaise legrest",
      "Available in manual and power"
    ]
  },
  {
    id: "p2",
    name: "Morrison Recliner",
    image: "/images/gallery-grey-recliner.jpg",
    category: "Recliners",
    price: "$749",
    description: "Family favorites don't get much better than the Morrison Recliner. It's designed for comfort and durability, making it a great addition to any living room or den. The plush back and seat cushions offer sink-in softness.",
    features: [
      "Plush, ultra-comfortable design",
      "Tufted back and seat",
      "Padded arms",
      "Rocking and reclining mechanism"
    ]
  },
  {
    id: "p3",
    name: "Jasper Recliner",
    image: "/images/greyson-rocking-recliner.jpg",
    category: "Recliners",
    price: "$929",
    description: "Generously scaled and cushioned, the Jasper Recliner is the ultimate in comfort. Its wide seat and tall back make it perfect for taller users or anyone who loves extra room to relax.",
    features: [
      "Generously scaled for extra comfort",
      "Flared pillow arms",
      "Stitched pillow back",
      "High-grade foam seat cushions"
    ]
  },
  {
    id: "p4",
    name: "Tahoe Sectional",
    image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
    category: "Sectionals",
    price: "$2,499",
    description: "The Tahoe Sectional brings a relaxed, casual vibe to your living space. With deep seats and plush cushions, it's designed for lounging. The modular design allows you to configure it to fit your room perfectly.",
    features: [
      "Deep, wide seats for lounging",
      "Modular components for custom layouts",
      "ComfortCore® cushions",
      "Casual, inviting style"
    ]
  },
  {
    id: "p5",
    name: "Trouper Sectional",
    image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
    category: "Sectionals",
    price: "$2,899",
    description: "Bring the comfort of the Trouper Recliner to the whole family with the Trouper Sectional. It features the same sculpted bucket seats and supportive back cushions, now in a spacious sectional format.",
    features: [
      "Sculpted bucket seats",
      "Reclining modules available",
      "Console storage options",
      "Durable, family-friendly fabric"
    ]
  },
  {
    id: "p6",
    name: "Ava Sofa",
    image: "/images/TD8_Ava_010769_C196552_009.jpg",
    category: "Sofas",
    price: "$1,299",
    description: "The Ava Sofa combines classic style with modern comfort. Its clean lines and tapered wood legs give it a sophisticated look, while the deep cushions ensure it's cozy enough for everyday use.",
    features: [
      "Classic, versatile design",
      "Tapered wood legs",
      "Welt trim details",
      "Premier standard seat cushions"
    ]
  },
  {
    id: "p7",
    name: "Collins Sofa",
    image: "/images/TD13a_Collins_610494_D180764_018.jpg",
    category: "Sofas",
    price: "$1,499",
    description: "With its rolled arms and deep comfort, the Collins Sofa is a timeless addition to any home. It's designed to look great and feel even better, with a supportive back and seat that holds its shape.",
    features: [
      "Rolled arms for a classic look",
      "ComfortCore® cushions",
      "Patented La-Z-Boy construction",
      "Customizable fabric options"
    ]
  },
  {
    id: "p8",
    name: "Leah Sleep Sofa",
    image: "/images/TD28e_Leah_555-418_D206893.jpg",
    category: "Sleep Sofas",
    price: "$1,699",
    description: "The Leah Sleep Sofa is the perfect solution for overnight guests. By day, it's a stylish and comfortable sofa. By night, it transforms into a queen-size bed with a premium mattress.",
    features: [
      "Queen-size Supreme Comfort™ mattress",
      "Easy-to-operate mechanism",
      "Stylish, compact design",
      "Includes two accent pillows"
    ]
  },
  {
    id: "p9",
    name: "Armitage Chair",
    image: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg",
    category: "Chairs",
    price: "$699",
    description: "The Armitage Chair is a modern classic. Its mid-century inspired design features clean lines and button tufting, making it a stylish accent piece for any room.",
    features: [
      "Mid-century modern design",
      "Button-tufted back",
      "Tapered wood legs",
      "Compact footprint"
    ]
  }
];

export default function Product() {
  const [match, params] = useRoute("/product/:id");
  const productId = params?.id;
  
  const product = products.find(p => p.id === productId);

  if (!match || !product) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">Product not found</h2>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container">
        <Link href={`/category/${product.category}`}>
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-accent">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to {product.category}
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-muted rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-primary/80">
                {product.price}
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg text-muted-foreground">
              <p>{product.description}</p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Request Fabric Swatches
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
