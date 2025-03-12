
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img 
            src="/lovable-uploads/c416b954-f460-4b1a-8877-bb2a8887bfe6.png" 
            alt="Cheese Tech Logo" 
            className="h-12 md:h-14 w-auto"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cheese-700 hover:text-tech-600 transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={cn(
              "h-0.5 bg-cheese-700 rounded-full transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "w-6 transform rotate-45 translate-y-2" : "w-6"
            )}></span>
            <span className={cn(
              "h-0.5 bg-cheese-700 rounded-full transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "opacity-0 w-6" : "w-4"
            )}></span>
            <span className={cn(
              "h-0.5 bg-cheese-700 rounded-full transition-all duration-300 ease-in-out",
              mobileMenuOpen ? "w-6 transform -rotate-45 -translate-y-2" : "w-5"
            )}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed left-0 right-0 h-screen glass-dark md:hidden transition-all duration-300 ease-in-out transform",
        mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
      )}>
        <div className="container flex flex-col items-center justify-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMobileMenu}
              className="text-xl font-medium text-white my-4 py-2 hover:text-tech-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
