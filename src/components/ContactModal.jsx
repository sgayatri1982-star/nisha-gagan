import React, { useState } from 'react'
import { X, Send, User, MapPin, Phone, MessageSquare } from 'lucide-react'
import { submitContactForm } from '../lib/supabase'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
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
        ...formData,
        created_at: new Date().toISOString(),
        source: 'contact_modal'
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        location: '',
        mobile: '',
        message: ''
      })
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Connect With Us</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="modal-body">
            {submitStatus === 'success' && (
              <div className="alert alert-success d-flex align-items-center">
                <Send className="me-2" size={20} />
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-danger">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label d-flex align-items-center">
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
              
              <div className="mb-3">
                <label htmlFor="location" className="form-label d-flex align-items-center">
                  <MapPin size={16} className="me-2" />
                  Location *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your city/location"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label d-flex align-items-center">
                  <Phone size={16} className="me-2" />
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="form-label d-flex align-items-center">
                  <MessageSquare size={16} className="me-2" />
                  Message *
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us about your requirements or questions..."
                ></textarea>
              </div>
              
              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="me-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal