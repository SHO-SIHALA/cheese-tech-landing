
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/contexts/ShoppingContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useShoppingCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors duration-500">
              <span className="text-foreground text-xs font-bold tracking-tighter">CT</span>
            </div>
            <span className="font-medium text-sm uppercase tracking-[0.2em] text-foreground/80">
              Cheese Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products' },
              { to: '/manage', label: 'Store' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors duration-500"
              >
                {label}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors duration-500"
            >
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative group">
              <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center hover:border-foreground/30 transition-colors duration-500">
                <ShoppingCart className="w-4 h-4 text-foreground/60" />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground/60 hover:text-foreground transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-8 animate-fade-in">
            <div className="flex flex-col space-y-6 pt-4 border-t border-border">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products' },
                { to: '/manage', label: 'Store' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <a
                href="#contact"
                className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/cart"
                className="text-sm uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
