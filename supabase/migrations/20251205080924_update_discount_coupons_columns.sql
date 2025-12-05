/*
  # Update discount_coupons table columns

  1. Changes
    - Add `discount_percentage` column to store percentage values
    - Add `coupon_code` column as alias/duplicate of code
    - These changes ensure compatibility with frontend components

  2. Notes
    - Using IF NOT EXISTS pattern to avoid errors if columns already exist
*/

DO $$
BEGIN
  -- Add discount_percentage column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'discount_coupons' AND column_name = 'discount_percentage'
  ) THEN
    ALTER TABLE discount_coupons ADD COLUMN discount_percentage integer DEFAULT 0;
  END IF;

  -- Add coupon_code column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'discount_coupons' AND column_name = 'coupon_code'
  ) THEN
    ALTER TABLE discount_coupons ADD COLUMN coupon_code text;
  END IF;
END $$;
