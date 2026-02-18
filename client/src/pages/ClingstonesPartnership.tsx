import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function ClingstonesPartnership() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Helmet>
        <title>Clingstones and La-Z-Boy of Columbus Combine to Offer Local Youths Their Own "Field of Dreams"</title>
        <meta name="description" content="Partnership aims to create lasting memories for young players across the Chattahoochee Valley." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lzbcolumbus.com/blog/clingstones-partnership" />
        <meta property="og:title" content="Clingstones and La-Z-Boy of Columbus Combine to Offer Local Youths Their Own 'Field of Dreams'" />
        <meta property="og:description" content="Partnership aims to create lasting memories for young players across the Chattahoochee Valley." />
        <meta property="og:image" content="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/McmpfzJJGJclgvxc.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lzbcolumbus.com/blog/clingstones-partnership" />
        <meta property="twitter:title" content="Clingstones and La-Z-Boy of Columbus Combine to Offer Local Youths Their Own 'Field of Dreams'" />
        <meta property="twitter:description" content="Partnership aims to create lasting memories for young players across the Chattahoochee Valley." />
        <meta property="twitter:image" content="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/McmpfzJJGJclgvxc.png" />
      </Helmet>
      <div className="container max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/design-blog">
          <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              Community News
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              February 18, 2026
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Jack Johnson
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            Clingstones and La-Z-Boy of Columbus Combine to Offer Local Youths Their Own "Field of Dreams"
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnership aims to create lasting memories for young players across the Chattahoochee Valley.
          </p>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/McmpfzJJGJclgvxc.png" 
            alt="La-Z-Boy and Clingstones Partnership" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <p className="lead text-xl font-medium text-foreground mb-8">
            <strong>COLUMBUS, Ga.</strong> — The Columbus Clingstones will invite local youth league teams to join their heroes on the diamond in 2026, announcing a new "Clingstones Field of Dreams Team" program in partnership with La-Z-Boy of Columbus.
          </p>

          <p>
            Featured during the National Anthem prior to all 69 Clingstones home games at Synovus Park in 2026, youth baseball and softball teams from the Chattahoochee Valley and beyond will have the opportunity to take the field with potential future Major Leaguers while showcasing their own uniforms.
          </p>

          <div className="my-12 p-8 bg-muted/30 rounded-xl border-l-4 border-primary">
            <p className="text-xl italic font-serif text-foreground mb-4">
              "As a family-owned business, this partnership is especially meaningful to us. Our own kids play baseball here in Columbus, and we've experienced firsthand how special those on-field moments can be. There's nothing like hearing your name announced and stepping onto that field. We're proud to help give more local kids the chance to experience that feeling."
            </p>
            <footer className="text-sm font-bold text-primary uppercase tracking-wide">
              — Susan Evans
            </footer>
          </div>

          <p>
            Youth league teams looking to register their ballclubs for a Clingstones / La-Z-Boy of Columbus Field of Dreams Team date this season can visit <a href="https://Clingstones.com" target="_blank" rel="noopener noreferrer">Clingstones.com</a>, call 706-268-9594, or email <a href="mailto:Groups@clingstones.com">Groups@clingstones.com</a>.
          </p>

          <p>
            "Our main goal as an organization will always be reaching area kids and their families," said Clingstones general manager Pete Laven. "We are incredibly fortunate to have a partner in La-Z-Boy of Columbus who share a similar grass roots philosophy when it comes to youth sports."
          </p>

          <p>
            La-Z-Boy of Columbus, located in Columbus Park Crossing, is the home of exclusive furniture deals found only at the Columbus, Georgia, location.
          </p>

          <div className="my-12">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/WuHstxdjCsrIQOBR.png" 
              alt="Columbus Clingstones Press Release Banner" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <hr className="my-12 border-border" />

          <h3 className="text-2xl font-bold mb-4">About the 2026 Season</h3>
          <p>
            Single-game tickets, 2026 Season Memberships, and Group Outing plans are available now. Fans can visit <a href="https://Clingstones.com" target="_blank" rel="noopener noreferrer">Clingstones.com</a> or call 706-268-9594 for more information.
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            The Columbus Clingstones are the new Double-A affiliate of the Atlanta Braves and will begin their second season of Double-A baseball at Synovus Park in 2026. Opening Day is scheduled for Friday, April 3, when the Clingstones host the Chattanooga Lookouts to open a 69-game home schedule. For team information, merchandise, and more, visit Clingstones.com. Follow the Clingstones on Facebook, X, Tik Tok, and Instagram at GoClingstones.
          </p>
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Share this story:
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
