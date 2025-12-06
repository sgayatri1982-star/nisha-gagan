import React, { useState } from 'react'
import { 
  Headphones, 
  MessageCircle, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  CheckCircle, 
  Star,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  Search
} from 'lucide-react'
import ContactModal from '../components/ContactModal'

const CustomerSupport = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  const faqItems = [
    {
      question: "What is your typical response time for support requests?",
      answer: "We respond to all support requests within 2 hours during business hours and within 24 hours for non-urgent requests outside business hours."
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes, we provide 24/7 support for critical issues. Our premium support customers have access to round-the-clock assistance."
    },
    {
      question: "How can I track my order status?",
      answer: "You can track your order status through our customer portal or by contacting our support team with your order number."
    },
    {
      question: "What warranty do you provide on your products?",
      answer: "We offer a comprehensive 2-year warranty on all our products, covering manufacturing defects and performance issues."
    },
    {
      question: "Do you provide training for your products?",
      answer: "Yes, we offer comprehensive training programs including online tutorials, documentation, and on-site training sessions."
    }
  ]

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="customer-support-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                  Customer <span className="text-gradient">Support</span>
                </h1>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                  Exceptional customer service and support when you need it most. 
                  Our dedicated team is here to help you succeed with our products and services.
                </p>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                  data-aos="fade-up" 
                  data-aos-delay="400"
                >
                  <MessageCircle className="me-2" size={20} />
                  Get Support Now
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="600">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Customer Support" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Support <span className="text-gradient">Channels</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Multiple ways to get the help you need, when you need it
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Phone size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Phone Support</h4>
                <p className="text-muted mb-4">
                  Speak directly with our support experts for immediate assistance 
                  with urgent issues.
                </p>
                <div className="mb-3">
                  <strong className="text-primary">+1 (555) 123-4567</strong>
                </div>
                <small className="text-muted">Available 24/7 for critical issues</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <MessageCircle size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Live Chat</h4>
                <p className="text-muted mb-4">
                  Get instant help through our live chat system with real-time 
                  responses from our team.
                </p>
                <button className="btn btn-primary">
                  Start Chat
                </button>
                <small className="text-muted d-block mt-2">Average response: 2 minutes</small>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <Mail size={48} className="text-primary" />
                </div>
                <h4 className="mb-3">Email Support</h4>
                <p className="text-muted mb-4">
                  Send detailed inquiries and receive comprehensive responses 
                  from our support team.
                </p>
                <div className="mb-3">
                  <strong className="text-primary">support@modernshop.com</strong>
                </div>
                <small className="text-muted">Response within 2 hours</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Statistics */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Support <span className="text-gradient">Excellence</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Numbers that reflect our commitment to customer satisfaction
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">98%</h2>
                </div>
                <h5 className="mb-2">Satisfaction Rate</h5>
                <p className="text-muted mb-0">Customer satisfaction score</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">2hrs</h2>
                </div>
                <h5 className="mb-2">Response Time</h5>
                <p className="text-muted mb-0">Average first response time</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">24/7</h2>
                </div>
                <h5 className="mb-2">Availability</h5>
                <p className="text-muted mb-0">Round-the-clock support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4">
                <div className="mb-3">
                  <h2 className="display-4 fw-bold text-primary">95%</h2>
                </div>
                <h5 className="mb-2">First Call Resolution</h5>
                <p className="text-muted mb-0">Issues resolved on first contact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Support <span className="text-gradient">Services</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Comprehensive support services to ensure your success
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <BookOpen size={32} className="text-primary me-3" />
                  <h5 className="mb-0">Documentation</h5>
                </div>
                <p className="text-muted mb-3">
                  Comprehensive user manuals, installation guides, and technical 
                  documentation for all our products.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Step-by-step installation guides</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Troubleshooting manuals</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Best practices documentation</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <Video size={32} className="text-primary me-3" />
                  <h5 className="mb-0">Video Tutorials</h5>
                </div>
                <p className="text-muted mb-3">
                  Interactive video tutorials and training materials to help you 
                  get the most out of our products.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Product setup tutorials</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Advanced feature walkthroughs</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Maintenance procedures</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <Users size={32} className="text-primary me-3" />
                  <h5 className="mb-0">Training Programs</h5>
                </div>
                <p className="text-muted mb-3">
                  Professional training programs and certification courses for 
                  your team to maximize product utilization.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>On-site training sessions</small>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Online certification courses</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle size={16} className="text-success me-2" />
                    <small>Custom training programs</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Find quick answers to common questions
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-6">
              <div className="input-group" data-aos="fade-up" data-aos-delay="300">
                <span className="input-group-text">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {filteredFAQ.map((item, index) => (
                  <div key={index} className="accordion-item mb-3" data-aos="fade-up" data-aos-delay={index * 100}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        <HelpCircle size={20} className="text-primary me-3" />
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`faq${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredFAQ.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-muted">No FAQ items found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img 
                src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Support Team" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="support-content">
                <h2 className="display-5 fw-bold mb-4">
                  Expert Support <span className="text-gradient">Team</span>
                </h2>
                <p className="lead mb-4">
                  Our dedicated support team consists of experienced professionals 
                  who are passionate about helping you succeed.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Star size={20} className="text-warning me-3" />
                      <span>Certified product specialists</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Clock size={20} className="text-success me-3" />
                      <span>Average 5+ years experience</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <Headphones size={20} className="text-primary me-3" />
                      <span>Multilingual support available</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center">
                      <CheckCircle size={20} className="text-success me-3" />
                      <span>Continuous training and certification</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={openContactModal}
                >
                  <ArrowRight className="me-2" size={20} />
                  Meet Our Team
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
                Need Help? We're Here for You
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Don't hesitate to reach out. Our support team is ready to assist you 
                with any questions or challenges you may have.
              </p>
              <div className="d-flex gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="400">
                <button 
                  className="btn btn-light btn-lg"
                  onClick={openContactModal}
                >
                  <MessageCircle className="me-2" size={20} />
                  Contact Support
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <Download className="me-2" size={20} />
                  Download Resources
                </button>
              </div>
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

export default CustomerSupport