/*
  # Create initial database schema for ModernShop

  1. New Tables
    - `hero_slides` - Homepage hero section slides
    - `discount_coupons` - Special offers and discount coupons
    - `products` - Product catalog with featured/latest flags
    - `clients` - Client logos and information
    - `testimonials` - Customer testimonials and reviews
    - `contact_inquiries` - Contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for authenticated admin access for modifications

  3. Features
    - Support for image URLs and rich content
    - Flexible product categorization
    - Contact form data collection
    - Client showcase functionality
*/

-- Hero Slides Table
CREATE TABLE IF NOT EXISTS hero_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  description text,
  image text NOT NULL,
  button_text text DEFAULT 'Learn More',
  button_link text DEFAULT '#',
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active hero slides"
  ON hero_slides
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage hero slides"
  ON hero_slides
  FOR ALL
  TO authenticated
  USING (true);

-- Discount Coupons Table
CREATE TABLE IF NOT EXISTS discount_coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  discount_percentage integer NOT NULL CHECK (discount_percentage > 0 AND discount_percentage <= 100),
  coupon_code text NOT NULL UNIQUE,
  valid_until date,
  background_color text DEFAULT '#ff6b6b',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE discount_coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active discount coupons"
  ON discount_coupons
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage discount coupons"
  ON discount_coupons
  FOR ALL
  TO authenticated
  USING (true);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL CHECK (price > 0),
  original_price decimal(10,2) CHECK (original_price >= price),
  image text NOT NULL,
  category text DEFAULT 'general',
  rating decimal(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  reviews_count integer DEFAULT 0 CHECK (reviews_count >= 0),
  is_featured boolean DEFAULT false,
  is_new boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (true);

-- Clients Table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo text NOT NULL,
  website text,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active clients"
  ON clients
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage clients"
  ON clients
  FOR ALL
  TO authenticated
  USING (true);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text,
  company text,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  avatar text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active testimonials"
  ON testimonials
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true);

-- Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  mobile text,
  location text,
  message text NOT NULL,
  source text DEFAULT 'website',
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage contact inquiries"
  ON contact_inquiries
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_hero_slides_active_order ON hero_slides(is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_discount_coupons_active ON discount_coupons(is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured, is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_latest ON products(is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_clients_active ON clients(is_active, name);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status, created_at DESC);

-- Insert sample data
INSERT INTO hero_slides (title, subtitle, description, image, button_text, button_link, order_index) VALUES
('Welcome to ModernShop', 'Discover Amazing Products', 'Experience the best in quality, design, and innovation with our curated collection of premium products.', 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', 'Shop Now', '#products', 1),
('Premium Quality Products', 'Crafted with Excellence', 'Every product is carefully selected and tested to ensure the highest standards of quality and durability.', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', 'Learn More', '/about', 2),
('Innovation Meets Design', 'Future-Ready Solutions', 'Stay ahead with our cutting-edge products that combine innovative technology with stunning design.', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', 'Explore', '#featured', 3);

INSERT INTO discount_coupons (title, description, discount_percentage, coupon_code, valid_until, background_color) VALUES
('Special Offer', 'Get 25% off on all premium products', 25, 'SAVE25', '2024-12-31', '#ff6b6b'),
('Flash Sale', 'Limited time offer - 40% off selected items', 40, 'FLASH40', '2024-12-25', '#4ecdc4');