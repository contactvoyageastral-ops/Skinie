import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links Left */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <a href="#shop" className="text-sm font-medium tracking-wide hover:text-primary transition-colors">
            Shop
          </a>
          <a href="#routines" className="text-sm font-medium tracking-wide hover:text-primary transition-colors">
            Routines
          </a>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-center">
          <Link href="/" className="font-display text-3xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            Skinie
          </Link>
        </div>

        {/* Desktop Links Right */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          <a href="#about" className="text-sm font-medium tracking-wide hover:text-primary transition-colors">
            À propos
          </a>
          <button className="flex items-center gap-2 hover:text-primary transition-colors group">
            <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm font-medium">Cart (0)</span>
          </button>
        </div>

        {/* Mobile Cart */}
        <button className="md:hidden p-2 text-foreground relative">
          <ShoppingBag size={24} />
          <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg flex flex-col gap-4">
          <a
            href="#shop"
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </a>
          <a
            href="#routines"
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Routines
          </a>
          <a
            href="#about"
            className="text-lg font-medium p-2 hover:bg-muted rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            À propos
          </a>
        </div>
      )}
    </header>
  );
}
