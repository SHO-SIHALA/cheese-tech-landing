
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create product categories table
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  specifications JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create cart items table
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  shipping_address JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create order items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Create policies for categories (public read)
CREATE POLICY "categories_select" ON public.categories FOR SELECT TO authenticated, anon USING (true);

-- Create policies for products (public read)
CREATE POLICY "products_select" ON public.products FOR SELECT TO authenticated, anon USING (is_active = true);

-- Create policies for cart items (users can only access their own)
CREATE POLICY "cart_items_select" ON public.cart_items FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "cart_items_insert" ON public.cart_items FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "cart_items_update" ON public.cart_items FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "cart_items_delete" ON public.cart_items FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Create policies for orders (users can only access their own)
CREATE POLICY "orders_select" ON public.orders FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "orders_insert" ON public.orders FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Create policies for order items (users can only access their own through orders)
CREATE POLICY "order_items_select" ON public.order_items FOR SELECT TO authenticated 
USING (EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_id AND orders.user_id = auth.uid()));

-- Insert sample categories
INSERT INTO public.categories (name, description) VALUES
('Video Walls', 'LED displays, mounting systems, and controllers for video wall installations'),
('Computer Accessories', 'Keyboards, mice, cables, adapters and other computer peripherals'),
('Power Banks', 'Portable chargers, wireless chargers and power solutions');

-- Insert sample products
INSERT INTO public.products (name, description, price, category_id, stock_quantity, specifications) VALUES
-- Video Walls
('55" LED Video Wall Panel', 'Ultra-thin bezel LED panel perfect for video wall installations', 1299.99, 
 (SELECT id FROM categories WHERE name = 'Video Walls'), 10,
 '{"resolution": "1920x1080", "brightness": "500 nits", "bezel_width": "3.5mm"}'),
 
('Video Wall Controller', 'Professional video wall controller supporting up to 16 displays', 899.99,
 (SELECT id FROM categories WHERE name = 'Video Walls'), 5,
 '{"max_displays": 16, "input_ports": ["HDMI", "DVI", "VGA"], "output_resolution": "4K"}'),

-- Computer Accessories  
('Mechanical Gaming Keyboard', 'RGB backlit mechanical keyboard with blue switches', 89.99,
 (SELECT id FROM categories WHERE name = 'Computer Accessories'), 25,
 '{"switch_type": "Blue", "backlight": "RGB", "connectivity": "USB-C"}'),
 
('Wireless Gaming Mouse', 'High-precision wireless gaming mouse with 16000 DPI', 59.99,
 (SELECT id FROM categories WHERE name = 'Computer Accessories'), 30,
 '{"dpi": 16000, "battery_life": "70 hours", "connectivity": "2.4GHz Wireless"}'),

-- Power Banks
('20000mAh Fast Charging Power Bank', 'High-capacity power bank with 65W fast charging support', 79.99,
 (SELECT id FROM categories WHERE name = 'Power Banks'), 20,
 '{"capacity": "20000mAh", "fast_charging": "65W", "ports": ["USB-C", "USB-A"]}'),
 
('Wireless Charging Power Bank', '10000mAh power bank with Qi wireless charging pad', 49.99,
 (SELECT id FROM categories WHERE name = 'Power Banks'), 15,
 '{"capacity": "10000mAh", "wireless_charging": "15W", "wired_charging": "18W"}');
