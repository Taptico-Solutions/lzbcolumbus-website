import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/comfort-club", label: "Comfort Club" },
    { href: "/community", label: "Community" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                La-Z-Boy <span className="text-accent font-script text-3xl">Columbus</span>
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary font-semibold border-b-2 border-accent pb-1"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/comfort-club">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white font-serif">
                Join Club
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted",
                      location === link.href ? "text-primary bg-muted/50" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/comfort-club">
                <Button className="w-full bg-primary text-white font-serif" onClick={() => setIsMenuOpen(false)}>
                  Join Comfort Club
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-12">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand & Social */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary">
                La-Z-Boy <span className="text-accent font-script">Columbus</span>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Creating homes filled with comfort, style, and quality that lasts. 
                Proudly serving the Columbus community since 2002.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">
                    <a className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/comfort-club">
                    <a className="text-muted-foreground hover:text-primary transition-colors">Comfort Club</a>
                  </Link>
                </li>
                <li>
                  <Link href="/community">
                    <a className="text-muted-foreground hover:text-primary transition-colors">Community Involvement</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-semibold text-foreground">Connect with Us</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                  <address className="not-italic">
                    Columbus Park Crossing<br />
                    5555 Whittlesey Blvd., Bldg. 1<br />
                    Columbus, GA 31909
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-accent shrink-0" />
                  <a href="tel:7066531070" className="hover:text-primary transition-colors">
                    (706) 653-1070
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} La-Z-Boy Columbus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
