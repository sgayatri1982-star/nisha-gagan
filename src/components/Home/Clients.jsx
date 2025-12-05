import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { fetchClients } from '../../lib/supabase'

// Import Swiper styles
import 'swiper/css'

const Clients = () => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      const data = await fetchClients()
      if (data.length > 0) {
        setClients(data)
      } else {
        // Default clients if no data in database
        setClients(defaultClients)
      }
    } catch (error) {
      console.error('Error loading clients:', error)
      setClients(defaultClients)
    } finally {
      setLoading(false)
    }
  }

  const defaultClients = [
    {
      id: 1,
      name: "TechCorp",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://techcorp.com"
    },
    {
      id: 2,
      name: "InnovateLab",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://innovatelab.com"
    },
    {
      id: 3,
      name: "FutureTech",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://futuretech.com"
    },
    {
      id: 4,
      name: "DigitalPro",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://digitalpro.com"
    },
    {
      id: 5,
      name: "SmartSolutions",
      logo: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://smartsolutions.com"
    },
    {
      id: 6,
      name: "NextGen",
      logo: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "https://nextgen.com"
    }
  ]

  if (loading) {
    return (
      <section className="section-padding">
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
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
              Trusted by <span className="text-gradient">Leading Companies</span>
            </h2>
            <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
              Join thousands of satisfied customers who trust our products and services
            </p>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                }
              }}
              className="clients-swiper"
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className="text-center p-4">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="client-logo mx-auto d-block"
                      style={{ maxHeight: '80px', maxWidth: '150px' }}
                    />
                    <h6 className="mt-3 text-muted">{client.name}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center">
              <div className="row g-4">
                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">500+</h3>
                    <p className="text-muted">Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">1000+</h3>
                    <p className="text-muted">Projects Completed</p>
                  </div>
                </div>
                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">50+</h3>
                    <p className="text-muted">Countries Served</p>
                  </div>
                </div>
                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="text-center">
                    <h3 className="display-6 fw-bold text-primary">24/7</h3>
                    <p className="text-muted">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients