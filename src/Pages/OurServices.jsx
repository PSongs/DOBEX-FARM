import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import BlueImage from "../assets/BLUE IMAGE WATER.jpeg";
import { Link } from 'react-router-dom';
import "../Components/OurServices/ourservices.css"

const OurServices = () => {
  return (
    <div className='Home'>
      <Nav />



      <div className="Contact-Hero-One">
        <img src={BlueImage} alt=""></img>
        <div className="Contact-Hero-One-Container">
          <div className="Text-Holder">
            <div className="ABOUT-LINK">
              <h1>OUR SERVICES</h1>
              <br></br>

              <div className="Link-Holder">
                <Link className="H" to="/">
                  Home
                </Link>
                <div className="DASH"></div>
                <Link className="A">Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>




      <Footer />
    </div>
  )
}

export default OurServices