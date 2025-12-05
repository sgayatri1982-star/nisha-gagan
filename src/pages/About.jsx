import React, { useState } from 'react'
import { Users, Cpu, Zap, Award, TrendingUp, MessageCircle, CircleCheck as CheckCircle, Target, Lightbulb, Settings } from 'lucide-react'
import ContactModal from '../components/ContactModal'

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                  About <span className="text-gradient">ModernShop</span>
                </h1>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                  We are passionate about delivering exceptional products and services 
                  that exceed our customers' expectations through innovation, quality, and dedication.
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <MessageCircle className="me-2" size={20} />
                  Connect to Us
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="About Us" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                From humble beginnings to industry leadership
              </p>
            </div>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="story-content">
                <h3 className="h2 mb-4">Building Excellence Since Day One</h3>
                <p className="mb-4">
                  Founded with a vision to revolutionize the industry, ModernShop began as a small 
                  team of passionate individuals committed to creating products that make a difference. 
                  Our journey started with a simple belief: that quality and innovation should be 
                  accessible to everyone.
                </p>
                <p className="mb-4">
                  Over the years, we've grown from a startup to a trusted partner for businesses 
                  worldwide. Our commitment to excellence has remained unchanged, driving us to 
                  continuously improve and innovate in everything we do.
                </p>
                <div className="d-flex align-items-center">
                  <div className="me-4">
                    <h4 className="text-primary fw-bold">2019</h4>
                    <p className="mb-0 small">Founded</p>
                  </div>
                  <div className="me-4">
                    <h4 className="text-primary fw-bold">500+</h4>
                    <p className="mb-0 small">Happy Clients</p>
                  </div>
                  <div>
                    <h4 className="text-primary fw-bold">50+</h4>
                    <p className="mb-0 small">Countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Our Story" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Technology Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                About Our <span className="text-gradient">Technology</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Cutting-edge solutions powered by innovation
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Cpu size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Advanced Processing</h4>
                <p className="text-muted">
                  Our state-of-the-art processing technology ensures optimal performance 
                  and reliability in all our products.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Lightbulb size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Smart Innovation</h4>
                <p className="text-muted">
                  We integrate artificial intelligence and machine learning to create 
                  smarter, more efficient solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Settings size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Precision Engineering</h4>
                <p className="text-muted">
                  Every component is engineered with precision to deliver exceptional 
                  performance and longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Machine Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Latest Machine" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="machine-content">
                <h2 className="display-5 fw-bold mb-4">
                  Latest <span className="text-gradient">Machine Technology</span>
                </h2>
                <p className="lead mb-4">
                  Our newest generation of machines represents the pinnacle of engineering 
                  excellence and technological advancement.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-2" />
                      <span>AI-Powered Automation</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-2" />
                      <span>Energy Efficient</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-2" />
                      <span>Remote Monitoring</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-2" />
                      <span>Predictive Maintenance</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Quality Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Production <span className="text-gradient">Quality</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Uncompromising standards in every aspect of production
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="mb-3">
                  <Award size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">ISO Certified</h4>
                <p className="text-muted">
                  All our processes are ISO 9001:2015 certified ensuring consistent quality.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="mb-3">
                  <Target size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Zero Defects</h4>
                <p className="text-muted">
                  Our rigorous testing ensures zero-defect products reach our customers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="mb-3">
                  <CheckCircle size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Quality Control</h4>
                <p className="text-muted">
                  Multi-stage quality control processes at every production step.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="mb-3">
                  <Users size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Expert Team</h4>
                <p className="text-muted">
                  Skilled professionals with decades of combined experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Speed Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="speed-content">
                <h2 className="display-5 fw-bold mb-4">
                  Production <span className="text-gradient">Speed</span>
                </h2>
                <p className="lead mb-4">
                  Fast delivery without compromising quality. Our optimized production 
                  processes ensure quick turnaround times for all orders.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-primary fw-bold">24hrs</h3>
                      <p className="mb-0 small">Express Orders</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-primary fw-bold">99.8%</h3>
                      <p className="mb-0 small">On-Time Delivery</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-primary fw-bold">1000+</h3>
                      <p className="mb-0 small">Units/Day</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-primary fw-bold">24/7</h3>
                      <p className="mb-0 small">Production</p>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  <TrendingUp className="me-2" size={20} />
                  Get Quote
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Production Speed" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Ready to Work With Us?
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Let's discuss your requirements and see how we can help you achieve your goals.
              </p>
              <button 
                className="btn btn-light btn-lg"
                onClick={openContactModal}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <MessageCircle className="me-2" size={20} />
                Connect to Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  )
}

export default About