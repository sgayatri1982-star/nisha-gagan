import React, { useState, useEffect } from 'react'
import { Star, ShoppingCart, Eye, Heart, Clock } from 'lucide-react'
import { fetchLatestProducts } from '../../lib/supabase'

const LatestProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLatestProducts()
  }, [])

  const loadLatestProducts = async () => {
    try {
      const data = await fetchLatestProducts()
      if (data.length > 0) {
        setProducts(data)
      } else {
        // Default products if no data in database
        setProducts(defaultProducts)
      }
    } catch (error) {
      console.error('Error loading latest products:', error)
      setProducts(defaultProducts)
    } finally {
      setLoading(false)
    }
  }

  const defaultProducts = [
    {
      id: 7,
      name: "Smart Home Hub",
      description: "Control your entire home with voice commands",
      price: 149.99,
      image: "https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.7,
      reviews_count: 89,
      is_new: true
    },
    {
      id: 8,
      name: "Wireless Charging Pad",
      description: "Fast wireless charging for all devices",
      price: 49.99,
      image: "https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.5,
      reviews_count: 156,
      is_new: true
    },
    {
      id: 9,
      name: "4K Action Camera",
      description: "Capture adventures in stunning 4K quality",
      price: 299.99,
      image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.8,
      reviews_count: 203,
      is_new: true
    },
    {
      id: 10,
      name: "Premium Coffee Maker",
      description: "Brew perfect coffee every morning",
      price: 199.99,
      image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.6,
      reviews_count: 124,
      is_new: true
    },
    {
      id: 11,
      name: "LED Desk Lamp",
      description: "Adjustable lighting for work and study",
      price: 79.99,
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.4,
      reviews_count: 67,
      is_new: true
    },
    {
      id: 12,
      name: "Portable Power Bank",
      description: "20000mAh capacity for all-day power",
      price: 39.99,
      image: "https://images.pexels.com/photos/4790264/pexels-photo-4790264.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.3,
      reviews_count: 89,
      is_new: true
    },
    {
      id: 13,
      name: "Bluetooth Earbuds",
      description: "True wireless with premium sound quality",
      price: 129.99,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.7,
      reviews_count: 178,
      is_new: true
    },
    {
      id: 14,
      name: "Smart Water Bottle",
      description: "Track hydration with smart technology",
      price: 89.99,
      image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.2,
      reviews_count: 45,
      is_new: true
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="text-warning" fill="currentColor" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} className="text-warning" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-muted" />)
    }

    return stars
  }

  if (loading) {
    return (
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
              Latest <span className="text-gradient">Products</span>
            </h2>
            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
              Check out our newest arrivals and trending items
            </p>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card product-card h-100">
                <div className="position-relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="position-absolute top-0 end-0 p-3">
                    <button className="btn btn-light btn-sm rounded-circle me-2">
                      <Heart size={16} />
                    </button>
                    <button className="btn btn-light btn-sm rounded-circle">
                      <Eye size={16} />
                    </button>
                  </div>
                  {product.is_new && (
                    <div className="position-absolute top-0 start-0 p-3">
                      <span className="badge bg-success d-flex align-items-center">
                        <Clock size={12} className="me-1" />
                        New
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                  
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex align-items-center me-2">
                      {renderStars(product.rating)}
                    </div>
                    <small className="text-muted">({product.reviews_count})</small>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="h6 text-primary fw-bold mb-0">${product.price}</span>
                    <button className="btn btn-primary btn-sm">
                      <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <button className="btn btn-outline-primary btn-lg">
            View All Latest Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestProducts