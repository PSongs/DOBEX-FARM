import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import "../Components/ContactUs/contactus.css";
import BlueImage from "../assets/BLUE IMAGE WATER.jpeg";
import Tracker from "../Components/Tracker/Tracker";



const ContactUs = () => {
  const handleWhatsAppChat = () => {
    window.open("https://wa.me//2347035543255", "_blank");
  };

  return (
    <div className="Home">
      <Nav />

      <div className="Contact-Hero-One">
        <img src={BlueImage} alt=""></img>
        <div className="Contact-Hero-One-Container">
          <div className="Text-Holder">
          <div className="ABOUT-LINK">
              <h1>CONTACT<br></br>

              <div className="Link-Holder">
                <Link className="H" to="/">
                  Home
                </Link>
                <div className="DASH"></div>
                <Link className="A">Contact</Link>
              </div>
              </h1> 
            </div>
          </div>
        </div>
      </div>

      <div className="Contact-Hero-Three">
        <div className="Contact-Hero-Three-Container">
          <div className="Con">
            <h2>Our Hours</h2>
            <h4>Monday to Saturdays 9am-7pm</h4>
          </div>

          <div className="Con">
            <h2>Telephone Numbers</h2>
            <h4>07035543255</h4>
            <h4>08126085126</h4>
            <h4>08136950374</h4>
            <br></br>

            <button id="WhatsAPP" onClick={handleWhatsAppChat}>
                  Chat Us
          </button>
          </div>

          <div className="Con">
            <h2>Email Address</h2>
            <h4>farms.dobekfarms@hotmail.com</h4>
          </div>
        </div>
      </div>

      <Footer />

      <Tracker />
    </div>
  );
};

export default ContactUs;
