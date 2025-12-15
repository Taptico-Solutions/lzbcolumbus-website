import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ArrowRight, Heart, ShieldCheck, Armchair } from "lucide-react";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/gallery-1.jpg" 
            alt="Cozy modern farmhouse living room with La-Z-Boy furniture" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-accent"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
              Welcome to <br/>
              <span className="text-foreground">La-Z-Boy Home Furnishings & Decor!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
              Creating homes filled with comfort, style, and quality that lasts right here in Columbus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/comfort-club">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-serif text-lg px-8 py-6 h-auto cursor-pointer">
                  Join Comfort Club
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-serif text-lg px-8 py-6 h-auto bg-transparent" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner Introduction Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg z-0" />
              <img 
                src="/images/family-photo-real.jpg" 
                alt="The Evans Family - Owners of La-Z-Boy Columbus" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg z-20 max-w-xs hidden md:block">
                <p className="font-script text-2xl text-accent text-center">The Evans Family</p>
                <p className="text-xs text-center text-muted-foreground uppercase tracking-widest mt-1">Serving Columbus Since 2002</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
                Hey Friends!
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We're the <span className="font-semibold text-foreground">Evans Family</span>, proud owners of your local La-Z-Boy store right here in Columbus since 2002.
                </p>
                <p>
                  For more than two decades, we've been committed to helping our neighbors create homes filled with comfort, style, and quality that lasts. Providing outstanding service has always been at the heart of what we do, and we're grateful for the chance to serve families across our community.
                </p>
                <p>
                  Beyond the showroom, we love being involved locally—supporting schools, teams, and events that make Columbus such a special place to call home.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/community">
                  <Button variant="link" className="text-accent hover:text-accent/80 p-0 text-lg font-serif italic cursor-pointer">
                    Read more about our community involvement <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Legacy Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Experience Comfort Redefined</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-accent" />,
                title: "Our Legacy",
                description: "We're more than just a store - we're a family. When you visit us, you become part of the La-Z-Boy Columbus extended family."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-accent" />,
                title: "Our Commitment",
                description: "Creating customers for life - one EXCEPTIONAL experience at a time. Our team works diligently to ensure you're satisfied."
              },
              {
                icon: <Armchair className="h-10 w-10 text-accent" />,
                title: "Quality & Style",
                description: "Discover furniture that blends timeless style with the legendary comfort La-Z-Boy is known for worldwide."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-secondary/20">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">Gallery</h2>
              <p className="text-muted-foreground text-lg">Explore Our Collection</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Full Catalog
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder images using unsplash since we don't have specific product shots yet */}
            {[
              { src: "/images/TD13a_Collins_610494_D180764_018.jpg", link: "https://www.la-z-boy.com/p/sofas/collins-sofa/_/R-610494", alt: "Collins Sofa" },
              { src: "/images/TD8_Ava_010769_C196552_009.jpg", link: "https://www.la-z-boy.com/p/recliners/ava-high-leg-reclining-chair/_/R-028932", alt: "Ava Recliner" },
              { src: "/images/TD26_Jay_U44706_C180964_065.jpg", link: "https://www.la-z-boy.com/p/recliners/jay-rocking-recliner/_/R-010706", alt: "Jay Recliner" },
              { src: "/images/TD23_Finley_10X747_D160632_001(1).jpg", link: "https://www.la-z-boy.com/p/recliners/finley-rocking-recliner/_/R-010747", alt: "Finley Recliner" },
              { src: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg", link: "https://www.la-z-boy.com/p/chairs/armitage-high-leg-reclining-chair/_/R-028812", alt: "Armitage Chair" },
              { src: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg", link: "https://www.la-z-boy.com/p/sofas/tahoe-sofa/_/R-610468", alt: "Tahoe Sofa" },
              { src: "/images/TD13e_Neo_10X-762_D201081_068.jpg", link: "https://www.la-z-boy.com/p/recliners/neo-rocking-recliner/_/R-010762", alt: "Neo Recliner" },
              { src: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg", link: "https://www.la-z-boy.com/p/sofas/trouper-reclining-sofa/_/R-440724", alt: "Trouper Sofa" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-lg shadow-md aspect-[4/3] relative cursor-pointer"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-serif text-lg font-bold transition-opacity duration-300 bg-black/40 px-4 py-2 rounded">
                      {item.alt}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003349] mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              See the latest arrivals and design inspiration from our showroom.
            </p>
            <a 
              href="https://www.instagram.com/lazboycolumbus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#C25B3C] font-semibold hover:text-[#A04830] transition-colors"
            >
              <span className="mr-2">@lazboycolumbus</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-1.996 1.426c-2.503 0-2.836.01-3.825.055-.922.042-1.423.196-1.757.326-.443.172-.76.377-1.093.71-.333.333-.538.65-.71 1.093-.13.334-.284.835-.327 1.757-.044.99-.055 1.324-.055 3.825 0 2.503.011 2.836.055 3.825.043.922.197 1.423.327 1.757.172.443.377.76.71 1.093.333.333.65.538 1.093.71.334.13.835.284 1.757.327.99.044 1.324.055 3.825.055 2.503 0 2.836-.011 3.825-.055.922-.043 1.423-.197 1.757-.327.443-.172.76-.377 1.093-.71.333-.333.65.538-1.093-.71-.334-.13-.835-.284-1.757-.327-.989-.044-1.323-.055-3.824-.055zm3.825 3.825a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.426a3.709 3.709 0 100 7.418 3.709 3.709 0 000-7.418z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <InstagramFeed />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#E6E2D5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003349] mb-6">
            Join the Comfort Club
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive exclusive offers, design tips, and updates on new arrivals.
          </p>
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://lazyboy.us2.list-manage.com/subscribe/post?u=125356b6e77a67ca13f0f1c06&amp;id=677285eb78&amp;f_id=00b33ce0f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="flex flex-col gap-4 validate text-left" 
              target="_blank"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mce-FNAME" className="text-[#003349]">First Name</Label>
                  <Input type="text" name="FNAME" id="mce-FNAME" className="bg-white border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mce-LNAME" className="text-[#003349]">Last Name</Label>
                  <Input type="text" name="LNAME" id="mce-LNAME" className="bg-white border-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mce-EMAIL" className="text-[#003349]">Email Address <span className="text-red-500">*</span></Label>
                <Input 
                  type="email" 
                  name="EMAIL" 
                  id="mce-EMAIL" 
                  className="bg-white border-gray-300 required email"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mce-MMERGE7" className="text-[#003349]">City</Label>
                  <Input type="text" name="MMERGE7" id="mce-MMERGE7" className="bg-white border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mce-MMERGE9" className="text-[#003349]">Zip Code</Label>
                  <Input type="text" name="MMERGE9" id="mce-MMERGE9" className="bg-white border-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mce-MMERGE24" className="text-[#003349]">Who helped you with your sign up today?</Label>
                <select 
                  name="MMERGE24" 
                  id="mce-MMERGE24" 
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value=""></option>
                  <option value="Marlon Rice">Marlon Rice</option>
                  <option value="Tamika Davis">Tamika Davis</option>
                  <option value="Casey Cooper">Casey Cooper</option>
                  <option value="Jason Hall">Jason Hall</option>
                  <option value="Bret Gladden">Bret Gladden</option>
                  <option value="Aaulashua Smoot">Aaulashua Smoot</option>
                  <option value="Kennth Llera">Kennth Llera</option>
                  <option value="Susan Evans">Susan Evans</option>
                </select>
              </div>

              {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_125356b6e77a67ca13f0f1c06_677285eb78" tabIndex={-1} defaultValue="" />
              </div>
              
              <Button type="submit" name="subscribe" id="mc-embedded-subscribe" className="bg-[#C25B3C] hover:bg-[#A04830] text-white h-12 px-8 font-serif text-lg w-full mt-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-accent fill-accent mx-1" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-center font-serif italic leading-relaxed mb-8">
                  "The Evans family and their team made our furniture shopping experience an absolute joy. They took the time to understand our needs and helped us find the perfect pieces for our new home. We couldn't be happier!"
                </blockquote>
                <div className="text-center">
                  <p className="font-bold text-lg">Sarah & Mike T.</p>
                  <p className="text-white/70 text-sm">Columbus, GA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact / Map Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Showroom</h2>
                <p className="text-muted-foreground text-lg">
                  Come experience the comfort and quality of La-Z-Boy furniture in person. Our design experts are ready to help you create your dream home.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Address</h3>
                    <p className="text-muted-foreground">5555 Whittlesey Blvd<br />Columbus, GA 31909</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <p className="text-muted-foreground">(706) 322-9090</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 1:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-muted rounded-lg overflow-hidden shadow-lg relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8765432109876!2d-84.94567890123456!3d32.54321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cdd1234567890%3A0x1234567890abcdef!2sLa-Z-Boy%20Furniture%20Galleries!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="La-Z-Boy Columbus Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
