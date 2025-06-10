
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/contexts/ShoppingContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useShoppingCart();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="font-bold text-xl">Cheese Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/manage" className="text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
              <Store className="w-4 h-4" />
              Manage Store
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm">
                <ShoppingCart className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button size="sm" variant="outline">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/manage"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Manage Store
              </Link>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-2 px-3 py-2">
                <Link to="/cart">
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="w-4 h-4" />
                    {totalItems > 0 && (
                      <span className="ml-1">({totalItems})</span>
                    )}
                  </Button>
                </Link>
                <Button size="sm" variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
