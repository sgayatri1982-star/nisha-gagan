import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import DiscountCoupon from '../components/Home/DiscountCoupon'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import LatestProducts from '../components/Home/LatestProducts'
import Clients from '../components/Home/Clients'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <DiscountCoupon />
      <FeaturedProducts />
      <LatestProducts />
      <Clients />
      <Testimonials />
    </div>
  )
}

export default Home