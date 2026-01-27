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
    id: 6,
    slug: "cottage-design-trend",
    title: "The Cottage Design Trend: Comfort Comes Home",
    content: `
      <p class="mb-4">Cottage design is having a moment — and it’s easy to see why. In a world that feels busy and over-styled, this trend brings design back to what matters most: comfort, warmth, and spaces that are meant to be lived in. Cottage interiors feel welcoming, familiar, and effortlessly cozy — the kind of rooms you actually want to sit down and stay awhile in.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Comfortable Upholstery is at the Heart</h3>
      <p class="mb-4">Cottage spaces favor plush seating, soft fabrics, and furniture that invites you to relax. Think sofas and chairs with generous cushions, relaxed silhouettes, and performance fabrics that hold up to everyday life while still looking beautiful.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Soft Colors Create an Easygoing Foundation</h3>
      <p class="mb-4">Whites, creams, warm neutrals, soft greens, and pale blues help cottage rooms feel light and calm. These shades pair perfectly with upholstered furniture, layered textiles, and natural wood tones, creating a space that feels peaceful rather than precious.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Layering Adds Warmth and Personality</h3>
      <p class="mb-4">Cottage style shines when textures are mixed — throw pillows, cozy blankets, woven rugs, and upholstered pieces all working together. The result feels collected and comfortable, not overly matched or formal.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Livable Design is the Goal</h3>
      <p class="mb-4">Cottage interiors aren’t about perfection. They’re about homes that function for real people — families, pets, guests, and quiet evenings at home. Furniture that’s supportive, durable, and comfortable isn’t just practical here — it’s essential.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Modern Cottage Keeps Things Fresh</h3>
      <p class="mb-4">Today’s take on cottage design blends classic coziness with clean lines and thoughtful layouts. The look feels timeless, relaxed, and perfectly suited for everyday living — proof that comfort and good design can absolutely coexist.</p>

      <div class="my-8 p-6 bg-secondary/20 rounded-lg border border-secondary/40">
        <h4 class="text-xl font-serif text-primary mb-3">Featured Piece: La‑Z‑Boy Collins Sofa</h4>
        <p class="mb-4">A classic transitional silhouette with rolled arms, supportive blown-fiber backs, and box-seat cushions that strike the perfect balance of comfort and timeless style. It pairs beautifully with soft linens, cozy throws, and vintage-inspired décor typical of the cottage trend.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Why it works for cottage design:</strong> Simple, welcoming profile that feels homey without looking sloppy.</li>
          <li><strong>Customizable upholstery</strong> to match light, neutral, or earthy palettes.</li>
          <li><strong>Plush seating and rolled arms</strong> that invite lounging — key to cottage comfort.</li>
        </ul>
        <img src="/images/blog/collins-sofa.webp" alt="La-Z-Boy Collins Sofa" class="w-full h-auto rounded-md shadow-sm mb-4" />
        <a href="https://www.la-z-boy.com/p/stationary-sofas/collins-sofa/_/R-610494" target="_blank"        <a href="https://www.la-z-boy.com/p/stationary-sectionals/tahoe-sectional/_/R-xxs632" target="_blank"        <a href="https://www.la-z-boy.com/p/reclining-sofas/ava-reclining-sofa/_/R-444769" target="_blank"        <a href="https://www.la-z-boy.com/p/oversized-recliners/armitage-power-reclining-chair-and-a-half-w-headrest/_/R-85U812" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          View Product Details
        </a>
      </div>
    `,
    author: "La-Z-Boy Design Team",
    date: "January 24, 2026",
    image: "/images/blog/collins-sofa.webp",
    category: "Design Trends",
    relatedProducts: [
      {
        id: "collins-sofa",
        name: "Collins Sofa",
        image: "/images/blog/collins-sofa.webp",
        category: "Sofas",
        url: "https://www.la-z-boy.com/p/stationary-sofas/collins-sofa/_/R-610494"
      },
      {
        id: "p6",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas",
        url: "https://www.la-z-boy.com/p/reclining-sofas/ava-reclining-sofa/_/R-444769"
      }
    ]
  },
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
    author: "La-Z-Boy Corporate News",
    date: "August 4, 2025",
    image: "/images/logo-final.png",
    category: "Brand News",
    relatedProducts: [
      {
        id: "p1",
        name: "Trouper Recliner",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Recliners",
        url: "https://www.la-z-boy.com/p/rocking-recliners/trouper-rocking-recliner/_/R-010724"
      },
      {
        id: "p6",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas",
        url: "https://www.la-z-boy.com/p/reclining-sofas/ava-reclining-sofa/_/R-444769"
      }
    ]
  },
  {
    id: 1,
    slug: "choosing-perfect-recliner",
    title: "Tips for Choosing the Right La-Z-Boy Recliner",
    content: `
      <p class="mb-4">Choosing a recliner is about matching your comfort preferences, lifestyle, and space. These easy tips will help you find the perfect fit:</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">1. Think About How You Like to Relax</h3>
      <p class="mb-4">Do you enjoy gentle motion? Consider a rocking or swivel-gliding recliner. Want to sit straight and then slowly recline? A traditional reclining model may be best.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">2. Consider Your Space</h3>
      <p class="mb-4">If your room is tight, go for a wall (space-saving) recliner, which doesn't need as much room behind it to fully recline. If you want mobility and flexibility, a swivel gliding recliner lets you rotate and glide comfortably.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">3. Power vs. Manual</h3>
      <p class="mb-4">Power recliners let you adjust position with the touch of a button — great for effortless comfort and precise positioning. Manual recliners are simple, dependable, and don't require plugs or motors.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">4. Mobility Needs Matter</h3>
      <p class="mb-4">If standing up is becoming harder, a lift recliner gently raises you into a standing position, offering extra support and peace of mind.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">5. Match to Your Daily Life</h3>
      <p class="mb-4">Think about who will use it most. Families with kids might prefer durable, easy-to-clean fabrics and classic mechanisms, while someone who loves tech and convenience might lean toward powered models.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">6. Sit in It Before You Decide</h3>
      <p class="mb-4">Everyone feels comfort differently. Spend time in the recliner to test back support, legrest comfort, and ease of use before you buy.</p>

      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">Bottom Line:</h3>
      <p class="mb-4">Choose a recliner that fits your space, matches how you relax, and supports how you move. With La-Z-Boy's variety of styles and mechanisms, there's a perfect seat for nearly every lifestyle.</p>
    `,
    author: "La-Z-Boy Design Team",
    date: "October 15, 2023",
    image: "/images/pinnacle-power-lift-recliner.jpg",
    category: "Furniture Guide",
    relatedProducts: [
      {
        id: "p1",
        name: "Trouper Recliner",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Recliners",
        url: "https://www.la-z-boy.com/p/rocking-recliners/trouper-rocking-recliner/_/R-010724"
      },
      {
        id: "p2",
        name: "Morrison Recliner",
        image: "/images/gallery-grey-recliner.jpg",
        category: "Recliners",
        url: "https://www.la-z-boy.com/p/rocking-recliners/morrison-rocking-recliner/_/R-010766"
      },
      {
        id: "p3",
        name: "Jasper Recliner",
        image: "/images/greyson-rocking-recliner.jpg",
        category: "Recliners",
        url: "https://www.la-z-boy.com/p/rocking-recliners/jasper-rocking-recliner/_/R-010709"
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
        id: "p4",
        name: "Tahoe Sectional",
        image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
        category: "Sectionals",
        url: "https://www.la-z-boy.com/p/stationary-sectionals/tahoe-sectional/_/R-xxs632"
      },
      {
        id: "p9",
        name: "Armitage Chair",
        image: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg",
        category: "Chairs",
        url: "https://www.la-z-boy.com/p/oversized-recliners/armitage-power-reclining-chair-and-a-half-w-headrest/_/R-85U812"
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
    author: "La-Z-Boy Design Team",
    date: "September 10, 2023",
    image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
    category: "Space Planning",
    relatedProducts: [
      {
        id: "p5",
        name: "Trouper Sectional",
        image: "/images/TD27d_Trouper_MOD-724_LB172755_143.jpg",
        category: "Sectionals",
        url: "https://www.la-z-boy.com/p/reclining-sectionals/trouper-sectional/_/R-xxs724"
      },
      {
        id: "p4",
        name: "Tahoe Sectional",
        image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
        category: "Sectionals",
        url: "https://www.la-z-boy.com/p/stationary-sectionals/tahoe-sectional/_/R-xxs632"
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
    author: "La-Z-Boy Design Team",
    date: "August 22, 2023",
    image: "/images/TD13a_Collins_610494_D180764_018.jpg",
    category: "Materials",
    relatedProducts: [
      {
        id: "collins-sofa",
        name: "Collins Sofa",
        image: "/images/TD13a_Collins_610494_D180764_018.jpg",
        category: "Sofas"
      },
      {
        id: "p8",
        name: "Leah Sleep Sofa",
        image: "/images/TD28e_Leah_555-418_D206893.jpg",
        category: "Sleep Sofas",
        url: "https://www.la-z-boy.com/p/stationary-sofas/leah-queen-sleep-sofa/_/R-510418"
      }
    ]
  },
  {
    id: 6,
    slug: "easy-room-refresh-accessories",
    title: "Easy Ways to Refresh Your Room by Swapping Accessories",
    content: `
      <p class="mb-4">If your room is feeling a little tired but a full makeover isn't in the cards, accessories are your secret weapon. Small changes can make a big impact—without the time or cost of replacing furniture. Here are a few simple ways to update your space just by changing out the finishing touches.</p>
      
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
        id: "p6",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas",
        url: "https://www.la-z-boy.com/p/reclining-sofas/ava-reclining-sofa/_/R-444769"
      },
      {
        id: "p9",
        name: "Armitage Chair",
        image: "/images/TD16e_Armitage_MOD-812_E20462_001.jpg",
        category: "Chairs",
        url: "https://www.la-z-boy.com/p/oversized-recliners/armitage-power-reclining-chair-and-a-half-w-headrest/_/R-85U812"
      }
    ]
  },
  {
    id: 7,
    slug: "reasons-to-work-with-designer",
    title: "Reasons to Work with a La-Z-Boy Designer on Your Next Room",
    content: `
      <p class="mb-4">Designing a room can feel overwhelming, but it doesn't have to be. When you work with a La-Z-Boy designer, you get expert guidance that turns your ideas into a comfortable, cohesive space—without the guesswork. Here's why partnering with a designer makes all the difference:</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">1. A Room That Actually Fits Your Life</h3>
      <p class="mb-4">La-Z-Boy designers start by understanding how you live. From movie nights and family gatherings to quiet moments of relaxation, they help design a room that works for your daily routines—not just one that looks good in photos.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">2. Expert Space Planning</h3>
      <p class="mb-4">Designers know how to make the most of your space. They'll help with furniture placement, traffic flow, and scale so your room feels open, balanced, and comfortable—whether you're working with a cozy space or a large open floor plan.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">3. Help Choosing the Right Pieces</h3>
      <p class="mb-4">With so many options, it's easy to second-guess yourself. A La-Z-Boy designer helps you select the right sofas, recliners, fabrics, and finishes that work together and fit your comfort needs, lifestyle, and budget.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">4. Confidence in Color, Fabric, and Finishes</h3>
      <p class="mb-4">From performance fabrics to wood tones and accent details, designers help you coordinate choices that feel intentional and timeless. They'll also guide you toward durable options that make sense for kids, pets, and everyday living.</p>
      
      <h3 class="text-2xl font-serif text-primary mt-8 mb-4">5. Less Stress, Better Results</h3>
      <p class="mb-4">Designers simplify the process by handling the details—so you don't have to. The result? A room you feel confident about, comfortable in, and excited to come home to.</p>
    `,
    author: "Design Team",
    date: "January 20, 2026",
    image: "/images/hero/room-planner-family.jpg",
    category: "Design Services",
    relatedProducts: [
      {
        id: "p4",
        name: "Tahoe Sectional",
        image: "/images/TD11c_Tahoe_MOD-632_E191765_090.jpg",
        category: "Sectionals",
        url: "https://www.la-z-boy.com/p/stationary-sectionals/tahoe-sectional/_/R-xxs632"
      },
      {
        id: "p6",
        name: "Ava Sofa",
        image: "/images/TD8_Ava_010769_C196552_009.jpg",
        category: "Sofas",
        url: "https://www.la-z-boy.com/p/reclining-sofas/ava-reclining-sofa/_/R-444769"
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
                <CardTitle className="font-serif text-xl">Featured Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {post.relatedProducts.map((product) => (
                  <div key={product.id} className="flex gap-4 items-center group">
                    <Link href={product.id === 'room-planner' ? '/room-planner' : `/product/${product.id}`}>
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary cursor-pointer">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div>
                      <Link href={product.id === 'room-planner' ? '/room-planner' : `/product/${product.id}`}>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors cursor-pointer">{product.name}</h4>
                      </Link>
                      <Link href={`/category/${product.category}`}>
                        <p className="text-sm text-muted-foreground hover:text-accent cursor-pointer transition-colors">{product.category}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <a href="https://www.la-z-boy.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full">View All Products</Button>
                </a>
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
