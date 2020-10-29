import React from 'react'
import Hero from '../../components/Hero/HeroComponent'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Trending from '../categories/Trending' 
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>
      <Navbar />
      
      <Hero />
      
      <div className="body-container">
        <div className="card-home">
          <Trending />
        </div>
        <div className="sidebar-home">
          <Sidebar marginTop='65vh' />
        </div>
      </div>
      <Footer />
    </>
  )

}

export default Home