
import { Link } from 'react-router-dom';
import { useShoppingCart } from '@/contexts/ShoppingContext';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  stock_quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isLoading } = useShoppingCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await addToCart(product.id);
  };

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="glass-dark rounded-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.1]">
        {/* Image */}
        <div className="aspect-square bg-muted/10 relative overflow-hidden">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/20 text-sm">
              No image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-foreground/30 text-sm mb-4 line-clamp-2 font-light">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold gradient-text">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={isLoading || product.stock_quantity === 0}
              className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-500 disabled:opacity-30"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>
          </div>

          {product.stock_quantity === 0 && (
            <p className="text-destructive/60 text-xs mt-2 uppercase tracking-wider">Out of Stock</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
