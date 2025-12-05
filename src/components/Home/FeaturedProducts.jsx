import React, { useState, useEffect } from 'react'
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react'
import { fetchFeaturedProducts } from '../../lib/supabase'

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeaturedProducts()
  }, [])

  const loadFeaturedProducts = async () => {
    try {
      const data = await fetchFeaturedProducts()
      if (data.length > 0) {
        setProducts(data)
      } else {
        // Default products if no data in database
        setProducts(defaultProducts)
      }
    } catch (error) {
      console.error('Error loading featured products:', error)
      setProducts(defaultProducts)
    } finally {
      setLoading(false)
    }
  }

  const defaultProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality sound with noise cancellation",
      price: 299.99,
      original_price: 399.99,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.8,
      reviews_count: 124
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your health and fitness goals",
      price: 199.99,
      original_price: 249.99,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.6,
      reviews_count: 89
    },
    {
      id: 3,
      name: "Professional Camera",
      description: "Capture moments with stunning clarity",
      price: 899.99,
      original_price: 1199.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.9,
      reviews_count: 156
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      description: "Comfortable seating for long work hours",
      price: 449.99,
      original_price: 599.99,
      image: "https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.7,
      reviews_count: 203
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      description: "Powerful sound in a compact design",
      price: 79.99,
      original_price: 99.99,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.5,
      reviews_count: 67
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      description: "Responsive keys for gaming excellence",
      price: 159.99,
      original_price: 199.99,
      image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.8,
      reviews_count: 145
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
      <section id="featured" className="section-padding">
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
    <section id="featured" className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
              Discover our handpicked selection of premium products
            </p>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
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
                  {product.original_price && product.original_price > product.price && (
                    <div className="position-absolute top-0 start-0 p-3">
                      <span className="badge bg-danger">
                        {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{product.description}</p>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-flex align-items-center me-3">
                      {renderStars(product.rating)}
                    </div>
                    <small className="text-muted">({product.reviews_count} reviews)</small>
                  </div>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span className="h5 text-primary fw-bold">${product.price}</span>
                      {product.original_price && product.original_price > product.price && (
                        <span className="text-muted text-decoration-line-through ms-2">
                          ${product.original_price}
                        </span>
                      )}
                    </div>
                    <button className="btn btn-primary">
                      <ShoppingCart size={16} className="me-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <button className="btn btn-outline-primary btn-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts