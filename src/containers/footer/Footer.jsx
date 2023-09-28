import React from 'react'
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='aibuilder__footer section__padding'>
      <div className="aibuilder__footer-heading">
        <h1 className='gradient__text'>
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="aibuilder__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="aibuilder__footer-links">
        <div className="aibuilder__footer-links_logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="aibuilder__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="aibuilder__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="aibuilder__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          <p>005-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="aibuilder__footer-copyright">
        <p>2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer