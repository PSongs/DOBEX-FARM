import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import "../Components/Home/home.css";
import BImage from "../assets/FISH.jpg";
import { Link } from "react-router-dom";
import CATFISH from "../assets/india-929719_640.jpg";
import TILAPIAFISH from "../assets/tilapia fish.jpg";
import FISHFEED from "../assets/fish feed.jpg";
import FEEDING from "../assets/india-929719_640.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Nav />

      <div className="Hero-One">
        <img src={BImage} alt=""></img>
        <div className="Hero-One-Container">
          <div className="Hero-One-Content">
            <div className="Hero-One-Text">
              <p>
                WELCOME TO <br></br>DOBEK FARMS LIMITED
              </p>
              <h3>Fish farming at its best</h3>

              <br></br>
              <Link className="AboutBtn" to="/about">
                <button>ABOUT US</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Hero-Two">
        <h3>
          Dobek Farms Ltd is a fish farm that produces catfish at a lower price
          in Nigeria. It produces its own fish <br></br>feed by replacing fish
          meal with maggot.
        </h3>
        <br></br>
        <br></br>

        <h1>OUR SERVICES</h1>

        <div className="Service-Content">
          <div className="BOX">
            <div className="Image_Holder">
              <img src={CATFISH} alt=""></img>
            </div>
            <h3>CATFISH PRODUCTION</h3>
          </div>

          <div className="BOX">
            <div className="Image_Holder">
              <img src={TILAPIAFISH} alt=""></img>
            </div>
            <h3>TILAPIA FISH PRODUCTION</h3>
          </div>

          <div className="BOX">
            <div className="Image_Holder">
              <img src={FISHFEED} alt=""></img>
            </div>
            <h3>FISH FEED PRODUCTION</h3>
          </div>
        </div>
      </div>

      <div className="Hero-Three">
        <div className="Hero-Three-Text">
          <h1>OUR AIM</h1>
          <h3>
            Dobek farms limited aims to export catfish and tilapia to other
            countries when it has produced enough catfish to satisfy the
            Nigerian market
          </h3>
          <br></br>
          <br></br>

          <Link className="AboutBtn" to="/contact">
            <button>CONTACT US</button>
          </Link>
        </div>

        <div className="Hero-Three-Image">
          <img src={FEEDING} alt=""></img>
        </div>
      </div>

      <div className="Hero-Four">
        <div className="Hero-Four-IMG">
          <div className="From-Fish">
            <h2>
              From Fish Feed Production To Fish <br></br>Rearing, We Do It All.
            </h2>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="Know_More">
            <Link className="KnowBtn" to="/about">
              <button>KNOW MORE</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
