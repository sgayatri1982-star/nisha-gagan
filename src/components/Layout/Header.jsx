import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu } from 'lucide-react'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <ShoppingBag className="me-2" size={28} />
          ModernShop
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu size={24} />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/about')} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contact')} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header