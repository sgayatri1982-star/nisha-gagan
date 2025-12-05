import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'
import { submitContactForm } from '../lib/supabase'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        location: '', // Not collected in contact form
        message: `Subject: ${formData.subject}\n\n${formData.message}`,
        created_at: new Date().toISOString(),
        source: 'contact_page'
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4" data-aos="fade-up">
                Contact <span className="text-gradient">Us</span>
              </h1>
              <p className="lead mb-0" data-aos="fade-up" data-aos-delay="200">
                We'd love to hear from you. Get in touch with us for any questions, 
                support, or business inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info">
                <h3 className="mb-4" data-aos="fade-up">Get in Touch</h3>
                
                <div className="contact-item mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-1">Address</h5>
                      <p className="text-muted mb-0">
                        123 Business Street<br />
                        Suite 100<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-1">Phone</h5>
                      <p className="text-muted mb-0">
                        <a href="tel:+15551234567" className="text-decoration-none">
                          +1 (555) 123-4567
                        </a><br />
                        <a href="tel:+15551234568" className="text-decoration-none">
                          +1 (555) 123-4568
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="text-muted mb-0">
                        <a href="mailto:info@modernshop.com" className="text-decoration-none">
                          info@modernshop.com
                        </a><br />
                        <a href="mailto:support@modernshop.com" className="text-decoration-none">
                          support@modernshop.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item mb-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-1">Business Hours</h5>
                      <p className="text-muted mb-0">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="social-links mt-4" data-aos="fade-up" data-aos-delay="500">
                  <h5 className="mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <Facebook size={16} />
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <Instagram size={16} />
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form" data-aos="fade-up" data-aos-delay="200">
                <h3 className="mb-4">Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success d-flex align-items-center mb-4">
                    <Send className="me-2" size={20} />
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mb-4">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        <User size={16} className="me-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        <Mail size={16} className="me-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        <Phone size={16} className="me-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label">
                        <MessageSquare size={16} className="me-2" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter message subject"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        <MessageSquare size={16} className="me-2" />
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        placeholder="Enter your message here..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="me-2" size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">
                Find <span className="text-gradient">Us</span>
              </h2>
              <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">
                Visit our office or get directions to our location
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="map-container" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-light rounded-3 p-5 text-center">
                  <MapPin size={48} className="text-primary mb-3" />
                  <h4 className="mb-3">Interactive Map</h4>
                  <p className="text-muted mb-4">
                    Our interactive map will be integrated here to help you find our exact location.
                  </p>
                  <button className="btn btn-primary">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact