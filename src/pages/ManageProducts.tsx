
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DragDropProductManager from '@/components/DragDropProductManager';
import ProductCard from '@/components/ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Store, Phone, Mail, MapPin } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  stock_quantity: number;
}

const ManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleProductAdd = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: Date.now().toString() // Simple ID generation for demo
    };
    setProducts(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Store className="w-8 h-8" />
              Manage Your Store
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Easily add products to your store using drag-and-drop. Your contact details are automatically included for customer inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Manager */}
            <div className="lg:col-span-2">
              <DragDropProductManager onProductAdd={handleProductAdd} />
            </div>

            {/* Contact Info Card */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Your Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+92 305 566 4442</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@cheesetech.pk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Office #123, Some Street, City</p>
                    </div>
                  </div>

                  <Separator />

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/03055664442', '_blank')}
                  >
                    Contact via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Preview */}
          {products.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Your Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ManageProducts;
