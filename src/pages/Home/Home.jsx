import React from 'react'
import './Home.css'
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'  />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magnam eius beatae enim nemo iure unde commodi delectus, sunt esse nam nulla molestiae, eum dolore sed nobis doloribus autem excepturi!
           
            
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Home
