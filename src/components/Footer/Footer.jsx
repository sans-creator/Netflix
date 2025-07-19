import React from 'react'
import "./Footer.css"
import linkedin_icon from "../../assets/linkedin_icon.svg"
import github_icon from "../../assets/github_icon.svg"
import email_icon from "../../assets/email_icon.svg"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={linkedin_icon} alt="" />
        <img src={email_icon} alt="" />
        <img src={github_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
         <li>Media Centre</li>
        <li>lnvestor Relations</li>
        <li>Terms of Use</li>
        <li>Lega1 Notices</li>
        <li>Preferences</li>
        <li>Corporate Information</li>
        <li>Contact</li>
      </ul>
      <p className='copyright-text'>Netflix.inc </p>
    </div>
  )
}

export default Footer
