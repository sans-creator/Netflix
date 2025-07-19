import React from 'react'
import './Home.css'
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.png"
import hero_title from "../../assets/image.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'  />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            A criminal mastermind known as The Professor recruits eight people with unique skills to carry out the biggest heist in recorded history — to print billions of euros inside Spain's Royal Mint
           
            
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
