import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div className='Footer'>
            <h2>Quick links</h2>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/about">About Us</Link></h4>
            <h4><Link to="/services">Our Services</Link></h4>
            <h4><Link to="/contact">Contact Us</Link></h4>
        </div>
    </div>
  )
}

export default Footer