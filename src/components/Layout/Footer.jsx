import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <ShoppingBag className="me-2" size={28} />
              <h5 className="mb-0">ModernShop</h5>
            </div>
            <p className="mb-3">
              Your trusted partner for quality products and exceptional service. 
              We deliver excellence in every purchase.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-decoration-none">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-decoration-none">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-decoration-none">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="mb-2">
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Product Design</a>
              </li>
              <li className="mb-2">
                <a href="#">Manufacturing</a>
              </li>
              <li className="mb-2">
                <a href="#">Quality Control</a>
              </li>
              <li className="mb-2">
                <a href="#">Customer Support</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <div className="d-flex align-items-center mb-2">
              <MapPin size={16} className="me-2" />
              <span>123 Business Street, City, State 12345</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={16} className="me-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="me-2" />
              <span>info@modernshop.com</span>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 ModernShop. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">Privacy Policy</a>
            <a href="#" className="me-3">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer