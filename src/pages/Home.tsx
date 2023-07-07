import React from 'react'
import Hero from '../components/Hero/Hero'
import CategoriesSection from '../components/categories/CategoriesSection'
import NewArrivalsSection from '../components/categories/NewArrivalsSection'

const Home = () => {
  return (
    <div >
        <Hero/>
        <CategoriesSection/>
        <NewArrivalsSection/>
        
    </div>
  )
}

export default Home