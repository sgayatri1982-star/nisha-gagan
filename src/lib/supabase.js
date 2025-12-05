import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for database operations
export const fetchHeroSlides = async () => {
  const { data, error } = await supabase
    .from('hero_slides')
    .select('*')
    .eq('is_active', true)
    .order('order_index')
  
  if (error) {
    console.error('Error fetching hero slides:', error)
    return []
  }
  return data
}

export const fetchDiscountCoupons = async () => {
  const { data, error } = await supabase
    .from('discount_coupons')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching discount coupons:', error)
    return []
  }
  return data
}

export const fetchFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(6)
  
  if (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
  return data
}

export const fetchLatestProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(8)
  
  if (error) {
    console.error('Error fetching latest products:', error)
    return []
  }
  return data
}

export const fetchClients = async () => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('is_active', true)
    .order('name')
  
  if (error) {
    console.error('Error fetching clients:', error)
    return []
  }
  return data
}

export const fetchTestimonials = async () => {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data
}

export const submitContactForm = async (formData) => {
  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert([formData])
  
  if (error) {
    console.error('Error submitting contact form:', error)
    throw error
  }
  return data
}