/*
  # Initial Database Schema

  1. New Tables
    - `header_settings` - Store header configuration
    - `footer_settings` - Store footer configuration  
    - `hero_slides` - Store hero section slides
    - `discount_coupons` - Store discount coupon information
    - `products` - Store product information
    - `clients` - Store client/partner information
    - `testimonials` - Store customer testimonials
    - `contact_inquiries` - Store contact form submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access where appropriate
    - Add policies for authenticated admin access for modifications
*/

-- Header Settings Table
CREATE TABLE IF NOT EXISTS header_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  logo text,
  navigation jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Footer Settings Table  
CREATE TABLE IF NOT EXISTS footer_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_info jsonb DEFAULT '{}',
  social_links jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

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

-- Discount Coupons Table
CREATE TABLE IF NOT EXISTS discount_coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  discount_text text NOT NULL,
  description text,
  code text,
  valid_until date,
  background_color text DEFAULT '#ce071e',
  text_color text DEFAULT '#ffffff',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  image text NOT NULL,
  category text,
  rating decimal(2,1) DEFAULT 0,
  is_featured boolean DEFAULT false,
  is_new boolean DEFAULT false,
  is_active boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Clients Table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo text NOT NULL,
  website text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

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

-- Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  mobile text,
  location text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE header_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE discount_coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies for public read access
CREATE POLICY "Allow public read access to header_settings"
  ON header_settings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to footer_settings"
  ON footer_settings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to active hero_slides"
  ON hero_slides
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Allow public read access to active discount_coupons"
  ON discount_coupons
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Allow public read access to active products"
  ON products
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Allow public read access to active clients"
  ON clients
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Allow public read access to active testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policies for contact inquiries (allow public insert)
CREATE POLICY "Allow public insert to contact_inquiries"
  ON contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policies for authenticated admin access (full CRUD)
CREATE POLICY "Allow authenticated full access to header_settings"
  ON header_settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to footer_settings"
  ON footer_settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to hero_slides"
  ON hero_slides
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to discount_coupons"
  ON discount_coupons
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to products"
  ON products
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to clients"
  ON clients
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated full access to testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read access to contact_inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update access to contact_inquiries"
  ON contact_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_hero_slides_active_order ON hero_slides(is_active, order_index);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured, is_active);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category, is_active);
CREATE INDEX IF NOT EXISTS idx_clients_order ON clients(order_index, is_active);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active, created_at);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status, created_at);