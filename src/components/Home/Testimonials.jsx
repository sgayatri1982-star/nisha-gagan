import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/modules'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { fetchTestimonials } from '../../lib/supabase'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const data = await fetchTestimonials()
      if (data.length > 0) {
        setTestimonials(data)
      } else {
        // Default testimonials if no data in database
        setTestimonials(defaultTestimonials)
      }
    } catch (error) {
      console.error('Error loading testimonials:', error)
      setTestimonials(defaultTestimonials)
    } finally {
      setLoading(false)
    }
  }

  const defaultTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "Outstanding quality and exceptional service! The products exceeded our expectations and the team was incredibly professional throughout the entire process.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateLab",
      content: "We've been working with this team for over two years now. Their attention to detail and commitment to excellence is unmatched in the industry.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Creative Solutions",
      content: "The results speak for themselves. Our productivity increased by 40% after implementing their solutions. Highly recommended!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Operations Manager",
      company: "Global Enterprises",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed on time and within budget. Couldn't be happier with the results.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Founder",
      company: "StartupHub",
      content: "Their expertise and dedication helped us scale our business efficiently. The support team is always available and incredibly knowledgeable.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<Star key={i} size={16} className="text-warning" fill="currentColor" />)
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
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="testimonials-swiper pb-5"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card">
                    <div className="mb-4">
                      <Quote size={40} className="text-primary opacity-50" />
                    </div>
                    
                    <div className="d-flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="mb-4 text-muted">"{testimonial.content}"</p>
                    
                    <div className="d-flex align-items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="testimonial-avatar me-3"
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.position}
                          {testimonial.company && `, ${testimonial.company}`}
                        </small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials