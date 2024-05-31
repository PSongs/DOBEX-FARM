import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import BlueImage from "../assets/BLUE IMAGE WATER.jpeg";
import { Link } from "react-router-dom";
import "../Components/OurServices/ourservices.css";
import CATFISH from "../assets/india-929719_640.jpg";
import ICON from "../assets/GOOD ICON.png";
import TILAPIAFISH from "../assets/tilapia fish.jpg";
import FEED from "../assets/fish feed.jpg";

const OurServices = () => {
  return (
    <div className="Home">
      <Nav />

      <div className="Our-Hero-One">
        <img src={BlueImage} alt=""></img>
        <div className="Our-Hero-One-Container">
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

      <div className="Our-Hero-Two">

        <div className="Our-Con">
          <div className="Our-Con-Image">
            <img src={CATFISH} alt=""></img>
          </div>

          <div className="Our-Con-Text">
            <div className="First">
              <div className="Icon-Box">
                <img src={ICON} alt=""></img>
              </div>
              <h2>CATFISH PRODUCTION</h2>
            </div>

            <div className="Second">
              <h3>
                At Dobek Farms, we rear catfish from fingerling to table size.
              </h3>
            </div>
          </div>
        </div>


        <div className="Our-Con">
          <div className="Our-Con-Text">
            <div className="First">
              <div className="Icon-Box">
                <img src={ICON} alt=""></img>
              </div>
              <h2>TILAPIA PRODUCTION</h2>
            </div>

            <div className="Second">
              <h3>
                At Dobek Farms, we rear tilapia from fingerlings to table size.
              </h3>
            </div>
          </div>

          <div className="Our-Con-Image">
            <img src={TILAPIAFISH} alt=""></img>
          </div>
        </div>


        <div className="Our-Con">
          <div className="Our-Con-Image">
            <img src={FEED} alt=""></img>
          </div>

          <div className="Our-Con-Text">
            <div className="First">
              <div className="Icon-Box">
                <img src={ICON} alt=""></img>
              </div>
              <h2>FISH FEED PRODUCTION</h2>
            </div>

            <div className="Second">
              <h3>
              We produce fish feed at lower prices by replacing fish meal with maggot meal in the production process.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurServices;
