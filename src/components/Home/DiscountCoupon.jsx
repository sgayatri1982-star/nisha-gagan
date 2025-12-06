import React, { useState, useEffect } from 'react'
import { Gift, Clock, Tag } from 'lucide-react'
import { fetchDiscountCoupons } from '../../lib/supabase'

const DiscountCoupon = () => {
  const [coupons, setCoupons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDiscountCoupons()
  }, [])

  const loadDiscountCoupons = async () => {
    try {
      const data = await fetchDiscountCoupons()
      if (data.length > 0) {
        setCoupons(data)
      } else {
        // Default coupons if no data in database
        setCoupons(defaultCoupons)
      }
    } catch (error) {
      console.error('Error loading discount coupons:', error)
      setCoupons(defaultCoupons)
    } finally {
      setLoading(false)
    }
  }

  const defaultCoupons = [
    {
      id: 1,
      title: "Special Offer",
      description: "Get 25% off on all premium products",
      discount_percentage: 25,
      coupon_code: "SAVE25",
      valid_until: "2024-12-31",
      background_color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Flash Sale",
      description: "Limited time offer - 40% off selected items",
      discount_percentage: 40,
      coupon_code: "FLASH40",
      valid_until: "2024-12-25",
      background_color: "#4ecdc4"
    }
  ]

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
              Special <span className="text-gradient">Offers</span>
            </h2>
            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
              Don't miss out on these amazing deals and exclusive discounts
            </p>
          </div>
        </div>

        <div className="row g-4">
          {coupons.map((coupon, index) => (
            <div key={coupon.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 200}>
              <div 
                className="discount-card h-100"
                style={{ 
                  background: coupon.background_color || `linear-gradient(45deg, #ff6b6b, #ee5a24)` 
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <Gift size={40} />
                </div>
                <h3 className="h4 fw-bold mb-3">{coupon.title}</h3>
                <p className="mb-4">{coupon.description}</p>
                
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <span className="display-4 fw-bold">{coupon.discount_percentage}%</span>
                      <span className="ms-2">OFF</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="coupon-code bg-white bg-opacity-20 rounded p-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center">
                        <Tag size={20} className="me-2" />
                        <strong>{coupon.coupon_code}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {coupon.valid_until && (
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <Clock size={16} className="me-2" />
                    <small>Valid until {new Date(coupon.valid_until).toLocaleDateString()}</small>
                  </div>
                )}

                <button className="btn btn-light btn-lg mt-4 w-100">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiscountCoupon