import React from "react";
import Nav from "../Components/Nav/Nav";
import "../Components/AboutUs/about.css";
import { Link } from "react-router-dom";
import BlueImage from "../assets/BLUE IMAGE WATER.jpeg";
import GREENWATER from "../assets/HEROONE IMAGE.jpg";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="Home">
      <Nav />

      <div className="About-Hero-One">
        <img src={BlueImage} alt=""></img>
        <div className="About-Hero-One-Container">
          <div className="Text-Holder">
            <div className="ABOUT-LINK">
              <h1>ABOUT US <br></br>

              <div className="Link-Holder">
                <Link className="H" to="/">
                  Home
                </Link>
                <div className="DASH"></div>
                <Link className="A">About</Link>
              </div>
              </h1> 
            </div>
          </div>
        </div>
      </div>



      <div className="About-Hero-Two">
        <div className="About-Hero-Two-Text">
          <h1>Who Are We</h1>
          <br className="BR"></br>
          <br className="BR"></br>

          <Link className="AboutB" to="/contact">
            <button>CONTACT US</button>
          </Link>
        </div>

        <div className="About-Hero-Two-Image">
          <h3>
            Dobek Farms Ltd is a fish farm that produces catfish at a lower
            price in the market place. It produces fish at a lower price by
            replacing fish meal with maggot meal in production of feed. The
            primary purpose of Dobek Farms Ltd is to produce catfish at first,
            tilapia and prawns later at a low price so it is affordable to low income
            earners in Nigeria. It targets production of up to two hundred tons
            of fish per year for the first five years and to increase this
            quantity continuously until it is the dominant fish producer of
            catfish and tilapia in the Nigerian market. It aims to export
            catfish and tilapia to other countries when it has produced enough
            catfish to satisfy the Nigerian market.
          </h3>
        </div>
      </div>

      <div className="About-Hero-Three">
        <img src={GREENWATER} alt=""></img>

        <div className="About-Hero-Three-Content">
          <div className="Content-Box">
            <div className="Main-Content">
              <h1>MISSION STATEMENT</h1>
              <h3>
                To produce fresh and frozen catfish, tilapia and prawns at a low price
                in the market place in Nigeria.
              </h3>

              <h1>VISION STATEMENT</h1>
              <h3>
                To be the leading catfish, tilapia and prawns producers in the Nigerian
                market within five years.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
