/*
  # Add reviews_count column to products table

  1. Changes
    - Add `reviews_count` column to products table with default value of 0
    - This column will store the number of reviews for each product

  2. Notes
    - Using IF NOT EXISTS pattern to avoid errors if column already exists
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'reviews_count'
  ) THEN
    ALTER TABLE products ADD COLUMN reviews_count integer DEFAULT 0;
  END IF;
END $$;
