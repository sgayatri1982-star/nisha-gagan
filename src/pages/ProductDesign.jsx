import React, { useState } from 'react'
import { 
  Lightbulb, 
  Palette, 
  Layers, 
  Zap, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  MessageCircle,
  Cpu,
  Settings,
  Eye
} from 'lucide-react'
import ContactModal from '../components/ContactModal'

const ProductDesign = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="product-design-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                  Product <span className="text-gradient">Design</span>
                </h1>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                  Transform your ideas into exceptional products with our innovative design process. 
                  We combine creativity, functionality, and user experience to create products that stand out.
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <MessageCircle className="me-2" size={20} />
                  Start Your Project
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Product Design" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Our Design <span className="text-gradient">Process</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                A systematic approach to creating products that users love
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <Lightbulb size={40} className="text-primary" />
                  </div>
                </div>
                <h4 className="mb-3">1. Ideation</h4>
                <p className="text-muted">
                  Brainstorming and conceptualizing innovative solutions based on market research and user needs.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <Palette size={40} className="text-primary" />
                  </div>
                </div>
                <h4 className="mb-3">2. Design</h4>
                <p className="text-muted">
                  Creating detailed designs, prototypes, and visual representations of the product concept.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <Settings size={40} className="text-primary" />
                  </div>
                </div>
                <h4 className="mb-3">3. Development</h4>
                <p className="text-muted">
                  Engineering and technical development to bring the design to life with precision and quality.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <CheckCircle size={40} className="text-primary" />
                  </div>
                </div>
                <h4 className="mb-3">4. Testing</h4>
                <p className="text-muted">
                  Rigorous testing and validation to ensure the product meets all quality and performance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Capabilities Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Design <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Comprehensive design services to bring your vision to reality
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Cpu size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Industrial Design</h4>
                <p className="text-muted">
                  Creating functional and aesthetically pleasing products that enhance user experience 
                  and meet market demands.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Eye size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">UI/UX Design</h4>
                <p className="text-muted">
                  Designing intuitive user interfaces and experiences that make products easy 
                  and enjoyable to use.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Layers size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">3D Modeling</h4>
                <p className="text-muted">
                  Advanced 3D modeling and visualization to help you see and refine your product 
                  before production.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Target size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Prototyping</h4>
                <p className="text-muted">
                  Rapid prototyping services to test concepts, validate designs, and iterate 
                  quickly before final production.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Users size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">User Research</h4>
                <p className="text-muted">
                  In-depth user research and market analysis to ensure your product meets 
                  real user needs and preferences.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Zap size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Innovation Consulting</h4>
                <p className="text-muted">
                  Strategic consulting to identify opportunities for innovation and competitive 
                  advantage in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Design <span className="text-gradient">Portfolio</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Showcasing our latest design projects and innovations
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Smart Device Design" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Smart Device Interface</h5>
                  <p className="card-text text-muted">
                    Intuitive interface design for next-generation smart home devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Industrial Equipment" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Industrial Equipment</h5>
                  <p className="card-text text-muted">
                    Ergonomic and efficient design for professional manufacturing equipment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Consumer Electronics" 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Consumer Electronics</h5>
                  <p className="card-text text-muted">
                    Sleek and modern design for cutting-edge consumer technology products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Design Team" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="design-content">
                <h2 className="display-5 fw-bold mb-4">
                  Why Choose Our <span className="text-gradient">Design Team</span>
                </h2>
                <p className="lead mb-4">
                  Our experienced design team combines creativity with technical expertise 
                  to deliver exceptional results that exceed expectations.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Award-winning design team with 10+ years experience</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>User-centered design approach for maximum impact</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Latest design tools and technologies</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Collaborative process with regular client feedback</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  <ArrowRight className="me-2" size={20} />
                  Get Started Today
                </button>
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
                Ready to Design Your Next Product?
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Let's collaborate to create something amazing that your customers will love.
              </p>
              <button 
                className="btn btn-light btn-lg"
                onClick={openContactModal}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <MessageCircle className="me-2" size={20} />
                Start Your Design Project
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

export default ProductDesign