import React, { useState } from 'react'
import { 
  Shield, 
  CheckCircle, 
  Award, 
  Target, 
  Eye, 
  Settings, 
  BarChart3, 
  Users,
  MessageCircle,
  TrendingUp,
  Clock,
  Zap
} from 'lucide-react'
import ContactModal from '../components/ContactModal'

const QualityControl = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="quality-control-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                  Quality <span className="text-gradient">Control</span>
                </h1>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                  Uncompromising quality standards and rigorous testing processes ensure 
                  every product meets the highest levels of excellence and reliability.
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <MessageCircle className="me-2" size={20} />
                  Learn About Our Standards
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Quality Control" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Quality <span className="text-gradient">Standards</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Certified processes and international standards compliance
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Award size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">ISO 9001:2015</h4>
                <p className="text-muted">
                  Certified quality management system ensuring consistent processes 
                  and continuous improvement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Shield size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Six Sigma</h4>
                <p className="text-muted">
                  Data-driven methodology for eliminating defects and improving 
                  quality performance metrics.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Target size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Lean Manufacturing</h4>
                <p className="text-muted">
                  Waste reduction and process optimization to enhance quality 
                  while improving efficiency.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <BarChart3 size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">SPC</h4>
                <p className="text-muted">
                  Statistical Process Control for real-time monitoring and 
                  predictive quality management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Quality <span className="text-gradient">Metrics</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">99.9%</h2>
                </div>
                <h5 className="mb-2">Quality Rate</h5>
                <p className="text-muted mb-0">First-pass quality success rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">0.01%</h2>
                </div>
                <h5 className="mb-2">Defect Rate</h5>
                <p className="text-muted mb-0">Industry-leading defect rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">100%</h2>
                </div>
                <h5 className="mb-2">Inspection</h5>
                <p className="text-muted mb-0">Products undergo full inspection</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">24hrs</h2>
                </div>
                <h5 className="mb-2">Response Time</h5>
                <p className="text-muted mb-0">Quality issue response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Procedures */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Testing <span className="text-gradient">Procedures</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Comprehensive testing protocols at every stage of production
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <Eye size={32} className="text-primary me-3" />
                  <h5 className="mb-0">Incoming Inspection</h5>
                </div>
                <p className="text-muted">
                  All raw materials and components undergo thorough inspection 
                  before entering the production process.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Material certification verification</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Dimensional accuracy checks</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Surface quality assessment</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <Settings size={32} className="text-primary me-3" />
                  <h5 className="mb-0">In-Process Testing</h5>
                </div>
                <p className="text-muted">
                  Continuous monitoring and testing during production to ensure 
                  quality standards are maintained.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Real-time process monitoring</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Statistical process control</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Automated quality checks</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <Target size={32} className="text-primary me-3" />
                  <h5 className="mb-0">Final Inspection</h5>
                </div>
                <p className="text-muted">
                  Comprehensive final inspection ensures every product meets 
                  specifications before shipment.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Functional performance testing</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Cosmetic quality inspection</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Packaging quality verification</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Quality Team" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="quality-content">
                <h2 className="display-5 fw-bold mb-4">
                  Expert Quality <span className="text-gradient">Team</span>
                </h2>
                <p className="lead mb-4">
                  Our dedicated quality assurance team brings decades of experience 
                  and expertise to ensure every product meets the highest standards.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Users size={20} className="text-success me-3" />
                      <span>Certified quality engineers and inspectors</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Clock size={20} className="text-success me-3" />
                      <span>24/7 quality monitoring and support</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Zap size={20} className="text-success me-3" />
                      <span>Rapid response to quality issues</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <TrendingUp size={20} className="text-success me-3" />
                      <span>Continuous improvement initiatives</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  <MessageCircle className="me-2" size={20} />
                  Discuss Quality Requirements
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Equipment */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Advanced Testing <span className="text-gradient">Equipment</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                State-of-the-art equipment for precise measurement and testing
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Coordinate Measuring Machine" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Coordinate Measuring Machines</h5>
                  <p className="card-text text-muted">
                    High-precision CMMs for dimensional inspection with accuracy 
                    down to micrometers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Optical Inspection" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Optical Inspection Systems</h5>
                  <p className="card-text text-muted">
                    Advanced optical systems for surface quality inspection 
                    and defect detection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Material Testing" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Material Testing Lab</h5>
                  <p className="card-text text-muted">
                    Comprehensive material testing including tensile, hardness, 
                    and chemical composition analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
                  alt="Environmental Testing" 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">Environmental Testing</h5>
                  <p className="card-text text-muted">
                    Climate chambers and environmental testing equipment for 
                    durability and reliability testing.
                  </p>
                </div>
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
                Experience Our Quality Standards
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Partner with us to ensure your products meet the highest quality standards 
                and exceed customer expectations.
              </p>
              <button 
                className="btn btn-light btn-lg"
                onClick={openContactModal}
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <MessageCircle className="me-2" size={20} />
                Discuss Quality Requirements
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

export default QualityControl