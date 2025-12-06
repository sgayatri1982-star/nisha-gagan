import React, { useState, useEffect } from 'react'
import { Star, ShoppingCart, Eye, Heart, Filter, Search, Grid, List } from 'lucide-react'
import { fetchLatestProducts, fetchFeaturedProducts } from '../lib/supabase'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, selectedCategory, priceRange])

  const loadProducts = async () => {
    try {
      const [featuredData, latestData] = await Promise.all([
        fetchFeaturedProducts(),
        fetchLatestProducts()
      ])
      
      const allProducts = [...featuredData, ...latestData]
      const uniqueProducts = allProducts.filter((product, index, self) => 
        index === self.findIndex(p => p.id === product.id)
      )
      
      if (uniqueProducts.length > 0) {
        setProducts(uniqueProducts)
      } else {
        setProducts(defaultProducts)
      }
    } catch (error) {
      console.error('Error loading products:', error)
      setProducts(defaultProducts)
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = [...products]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
      )
    }

    // Price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max
        } else {
          return product.price >= min
        }
      })
    }

    setFilteredProducts(filtered)
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
      reviews_count: 124,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description: "Track your health and fitness goals",
      price: 199.99,
      original_price: 249.99,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.6,
      reviews_count: 89,
      category: "Wearables"
    },
    {
      id: 3,
      name: "Professional Camera",
      description: "Capture moments with stunning clarity",
      price: 899.99,
      original_price: 1199.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.9,
      reviews_count: 156,
      category: "Photography"
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      description: "Comfortable seating for long work hours",
      price: 449.99,
      original_price: 599.99,
      image: "https://images.pexels.com/photos/586996/pexels-photo-586996.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.7,
      reviews_count: 203,
      category: "Furniture"
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      description: "Powerful sound in a compact design",
      price: 79.99,
      original_price: 99.99,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.5,
      reviews_count: 67,
      category: "Audio"
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      description: "Responsive keys for gaming excellence",
      price: 159.99,
      original_price: 199.99,
      image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop",
      rating: 4.8,
      reviews_count: 145,
      category: "Gaming"
    }
  ]

  const categories = ['all', 'Electronics', 'Wearables', 'Photography', 'Furniture', 'Audio', 'Gaming']
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-300', label: '$100 - $300' },
    { value: '300-500', label: '$300 - $500' },
    { value: '500', label: '$500+' }
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
      <div className="products-page">
        <section className="hero-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                Our <span className="text-gradient">Products</span>
              </h1>
              <p className="lead mb-0" data-aos="fade-up" data-aos-delay="200">
                Discover our complete range of premium products designed to enhance your lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="input-group">
                    <span className="input-group-text">
                      <Search size={16} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    {priceRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex justify-content-end align-items-center">
                <span className="me-3 text-muted">View:</span>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    type="button"
                    className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <span className="text-muted">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
              </div>
              
              {viewMode === 'grid' ? (
                <div className="row g-4">
                  {filteredProducts.map((product, index) => (
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
              ) : (
                <div className="row g-3">
                  {filteredProducts.map((product, index) => (
                    <div key={product.id} className="col-12" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="card product-card">
                        <div className="row g-0">
                          <div className="col-md-3">
                            <div className="position-relative overflow-hidden h-100">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="img-fluid h-100 w-100"
                                style={{ objectFit: 'cover' }}
                              />
                              {product.original_price && product.original_price > product.price && (
                                <div className="position-absolute top-0 start-0 p-3">
                                  <span className="badge bg-danger">
                                    {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card-body d-flex flex-column h-100">
                              <div className="row">
                                <div className="col-md-8">
                                  <h5 className="card-title">{product.name}</h5>
                                  <p className="card-text text-muted">{product.description}</p>
                                  
                                  <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center me-3">
                                      {renderStars(product.rating)}
                                    </div>
                                    <small className="text-muted">({product.reviews_count} reviews)</small>
                                  </div>
                                </div>
                                <div className="col-md-4 text-md-end">
                                  <div className="mb-3">
                                    <span className="h4 text-primary fw-bold">${product.price}</span>
                                    {product.original_price && product.original_price > product.price && (
                                      <div>
                                        <span className="text-muted text-decoration-line-through">
                                          ${product.original_price}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="d-flex gap-2 justify-content-md-end">
                                    <button className="btn btn-outline-primary btn-sm">
                                      <Heart size={16} />
                                    </button>
                                    <button className="btn btn-outline-primary btn-sm">
                                      <Eye size={16} />
                                    </button>
                                    <button className="btn btn-primary">
                                      <ShoppingCart size={16} className="me-2" />
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && (
                <div className="text-center py-5">
                  <h4 className="text-muted">No products found</h4>
                  <p className="text-muted">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products