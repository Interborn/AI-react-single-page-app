import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>Do you want to step in to the future before others?</h1>
        </div>

        <div className='gpt3__footer-button'>
          <form action="post">
            <input type="email" name="emailInput" id="emailInput" placeholder='email...' />
            <button type="submit">Request Early Access</button>
          </form>
        </div>

        <div className='gpt3__footer-links'>
          
          <div className='gpt3__footer-links_logo'>
            <img src={gpt3Logo} alt="logo" />
            <p>© 2023 GPT-3, Cadogy. All rights reserved.</p>
          </div>
          
          <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
          </div>

          <div className='gpt3__footer-links_div'>
            <h4>Get in Touch</h4>
            <p>123 Main St, City, State, 00000</p>
            <p>(000) 000-0000</p>
            <p>email@fakemail.com</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;