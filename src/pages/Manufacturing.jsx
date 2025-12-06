import React, { useState } from 'react'
import { 
  Factory, 
  Cog, 
  Shield, 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  TrendingUp,
  MessageCircle,
  Settings,
  Zap,
  Target
} from 'lucide-react'
import ContactModal from '../components/ContactModal'

const Manufacturing = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="manufacturing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                  Advanced <span className="text-gradient">Manufacturing</span>
                </h1>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                  State-of-the-art manufacturing facilities and processes that deliver precision, 
                  quality, and efficiency at scale. From prototypes to mass production.
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <MessageCircle className="me-2" size={20} />
                  Request Quote
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Manufacturing Facility" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Manufacturing <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Comprehensive manufacturing solutions for diverse industries
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Factory size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Precision Manufacturing</h4>
                <p className="text-muted">
                  High-precision manufacturing with tolerances down to ±0.001mm using 
                  advanced CNC machinery and automated systems.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Cog size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Custom Tooling</h4>
                <p className="text-muted">
                  In-house tooling design and manufacturing capabilities for specialized 
                  production requirements and unique product specifications.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Zap size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Automation</h4>
                <p className="text-muted">
                  Fully automated production lines with robotics and AI-driven quality 
                  control for consistent, high-volume manufacturing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Shield size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Quality Assurance</h4>
                <p className="text-muted">
                  Comprehensive quality management systems with real-time monitoring 
                  and statistical process control.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Clock size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Rapid Production</h4>
                <p className="text-muted">
                  Fast turnaround times with flexible production scheduling to meet 
                  urgent deadlines and market demands.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Settings size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Material Expertise</h4>
                <p className="text-muted">
                  Extensive experience with various materials including metals, plastics, 
                  composites, and advanced engineering materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Statistics */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Production <span className="text-gradient">Excellence</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Numbers that demonstrate our manufacturing capabilities
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">50K+</h2>
                </div>
                <h5 className="mb-2">Units Per Day</h5>
                <p className="text-muted mb-0">Maximum daily production capacity</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">99.8%</h2>
                </div>
                <h5 className="mb-2">Quality Rate</h5>
                <p className="text-muted mb-0">First-pass quality success rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">24/7</h2>
                </div>
                <h5 className="mb-2">Operations</h5>
                <p className="text-muted mb-0">Continuous production capability</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">72hrs</h2>
                </div>
                <h5 className="mb-2">Lead Time</h5>
                <p className="text-muted mb-0">Average production lead time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Manufacturing <span className="text-gradient">Process</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Streamlined workflow from design to delivery
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">1</span>
                  </div>
                </div>
                <h6 className="mb-2">Design Review</h6>
                <small className="text-muted">Analysis and optimization</small>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">2</span>
                  </div>
                </div>
                <h6 className="mb-2">Material Sourcing</h6>
                <small className="text-muted">Quality material selection</small>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">3</span>
                  </div>
                </div>
                <h6 className="mb-2">Production Setup</h6>
                <small className="text-muted">Tooling and configuration</small>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">4</span>
                  </div>
                </div>
                <h6 className="mb-2">Manufacturing</h6>
                <small className="text-muted">Precision production</small>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="500">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">5</span>
                  </div>
                </div>
                <h6 className="mb-2">Quality Control</h6>
                <small className="text-muted">Inspection and testing</small>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay="600">
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <span className="fw-bold text-primary">6</span>
                  </div>
                </div>
                <h6 className="mb-2">Delivery</h6>
                <small className="text-muted">Packaging and shipping</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="facility-content">
                <h2 className="display-5 fw-bold mb-4">
                  World-Class <span className="text-gradient">Facilities</span>
                </h2>
                <p className="lead mb-4">
                  Our state-of-the-art manufacturing facilities are equipped with the latest 
                  technology and operated by skilled professionals.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>100,000 sq ft climate-controlled facility</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>ISO 9001:2015 certified manufacturing processes</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Advanced robotics and automation systems</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Real-time production monitoring and analytics</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Lean manufacturing principles implementation</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  <TrendingUp className="me-2" size={20} />
                  Schedule Facility Tour
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Manufacturing Facility" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Industries <span className="text-gradient">We Serve</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Specialized manufacturing solutions across diverse sectors
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div className="mb-3">
                  <Award size={48} className="text-primary" />
                </div>
                <h5 className="mb-3">Automotive</h5>
                <p className="text-muted">
                  Precision components for automotive industry with strict quality standards.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div className="mb-3">
                  <Target size={48} className="text-primary" />
                </div>
                <h5 className="mb-3">Aerospace</h5>
                <p className="text-muted">
                  High-precision manufacturing for aerospace and defense applications.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div className="mb-3">
                  <Users size={48} className="text-primary" />
                </div>
                <h5 className="mb-3">Medical</h5>
                <p className="text-muted">
                  FDA-compliant manufacturing for medical devices and equipment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4">
                <div className="mb-3">
                  <Factory size={48} className="text-primary" />
                </div>
                <h5 className="mb-3">Electronics</h5>
                <p className="text-muted">
                  Advanced manufacturing for consumer and industrial electronics.
                </p>
              </div>
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
                Ready to Start Manufacturing?
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Get a quote for your manufacturing project and experience our world-class capabilities.
              </p>
              <button 
                className="btn btn-light btn-lg"
                onClick={openContactModal}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <MessageCircle className="me-2" size={20} />
                Request Manufacturing Quote
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

export default Manufacturing