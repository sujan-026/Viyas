-- Create cart table for Supabase
CREATE TABLE IF NOT EXISTS cart (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, product_id)
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS cart_user_id_idx ON cart(user_id);
CREATE INDEX IF NOT EXISTS cart_product_id_idx ON cart(product_id);

-- Enable RLS (Row Level Security)
ALTER TABLE cart ENABLE ROW LEVEL SECURITY;

-- Create policies for cart
CREATE POLICY "Users can view their own cart items" ON cart
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items" ON cart
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items" ON cart
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items" ON cart
  FOR DELETE USING (auth.uid() = user_id);
