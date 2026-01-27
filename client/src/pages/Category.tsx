import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Mock data for products - in a real app this would come from an API or CMS
const products = [
  {
    id: "p1",
    name: "Trouper Recliner",
    image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
    category: "Recliners",
    price: "$899"
  },
  {
    id: "p2",
    name: "Morrison Recliner",
    image: "/images/gallery-grey-recliner.jpg",
    category: "Recliners",
    price: "$749"
  },
  {
    id: "p3",
    name: "Jasper Recliner",
    image: "/images/greyson-rocking-recliner.jpg",
    category: "Recliners",
    price: "$929"
  },
  {
    id: "p4",
    name: "Tahoe Sectional",
    image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
    category: "Sectionals",
    price: "$2,499"
  },
  {
    id: "p5",
    name: "Trouper Sectional",
    image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
    category: "Sectionals",
    price: "$2,899"
  },
  {
    id: "p6",
    name: "Ava Sofa",
    image: "/images/TD8_Ava_010769_C196552_009.jpg",
    category: "Sofas",
    price: "$1,299"
  },
  {
    id: "collins-sofa",
    name: "Collins Sofa",
    image: "/images/TD13a_Collins_610494_D180764_018.jpg",
    category: "Sofas",
    price: "$1,499"
  },
  {
    id: "p8",
    name: "Leah Sleep Sofa",
    image: "/images/TD28e_Leah_555-418_D206893.jpg",
    category: "Sleep Sofas",
    price: "$1,699"
  },
  {
    id: "p9",
    name: "Armitage Chair",
    image: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg",
    category: "Chairs",
    price: "$699"
  }
];

export default function Category() {
  const [match, params] = useRoute("/category/:name");
  const categoryName = params?.name ? decodeURIComponent(params.name) : "";
  
  const categoryProducts = products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

  if (!match) return null;

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
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our collection of {categoryName.toLowerCase()}, designed for comfort and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={product.id === 'room-planner' ? '/room-planner' : `/product/${product.id}`}>
                    <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                      <div className="relative h-64 overflow-hidden bg-muted">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground">{product.category}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center border-t border-border/50 pt-4 mt-auto">
                        <span className="font-medium text-primary">{product.price}</span>
                        <span className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform">
                          View Details →
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-primary mb-4">No products found</h3>
              <p className="text-muted-foreground mb-8">
                We couldn't find any products in this category.
              </p>
              <Link href="/">
                <Button>Return Home</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
