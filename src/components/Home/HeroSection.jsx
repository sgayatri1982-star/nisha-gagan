import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ArrowRight, Play } from 'lucide-react'
import { fetchHeroSlides } from '../../lib/supabase'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const HeroSection = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadHeroSlides()
  }, [])

  const loadHeroSlides = async () => {
    try {
      const data = await fetchHeroSlides()
      if (data.length > 0) {
        setSlides(data)
      } else {
        // Default slides if no data in database
        setSlides(defaultSlides)
      }
    } catch (error) {
      console.error('Error loading hero slides:', error)
      setSlides(defaultSlides)
    } finally {
      setLoading(false)
    }
  }

  const defaultSlides = [
    {
      id: 1,
      title: "Welcome to ModernShop",
      subtitle: "Discover Amazing Products",
      description: "Experience the best in quality, design, and innovation with our curated collection of premium products.",
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      button_text: "Shop Now",
      button_link: "#products"
    },
    {
      id: 2,
      title: "Premium Quality Products",
      subtitle: "Crafted with Excellence",
      description: "Every product is carefully selected and tested to ensure the highest standards of quality and durability.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      button_text: "Learn More",
      button_link: "/about"
    },
    {
      id: 3,
      title: "Innovation Meets Design",
      subtitle: "Future-Ready Solutions",
      description: "Stay ahead with our cutting-edge products that combine innovative technology with stunning design.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      button_text: "Explore",
      button_link: "#featured"
    }
  ]

  if (loading) {
    return (
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
    )
  }

  return (
    <section className="hero-section position-relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id || index}>
            <div 
              className="hero-slide d-flex align-items-center min-vh-100"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image}) center/cover`,
                minHeight: '100vh'
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-xl-6">
                    <div className="hero-content text-white">
                      {slide.subtitle && (
                        <p className="lead mb-3" data-aos="fade-up">
                          {slide.subtitle}
                        </p>
                      )}
                      <h1 className="display-4 fw-bold mb-4" data-aos="fade-up" data-aos-delay="200">
                        {slide.title}
                      </h1>
                      <p className="lead mb-4" data-aos="fade-up" data-aos-delay="400">
                        {slide.description}
                      </p>
                      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
                        <a 
                          href={slide.button_link || '#'} 
                          className="btn btn-primary btn-lg me-3"
                        >
                          {slide.button_text || 'Get Started'}
                          <ArrowRight className="ms-2" size={20} />
                        </a>
                        <button className="btn btn-outline-light btn-lg">
                          <Play className="me-2" size={20} />
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection