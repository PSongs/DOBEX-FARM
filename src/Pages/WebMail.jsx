import React from "react";
import ConLogo from "../assets/LOGO.png";
import nameicon from "../assets/contact icon.png";
import emailicon from "../assets/email icon.png";
import contactuslogo from "../assets/contact-logo.png";
import "../Components/WebMail/webmail.css";
import { Link } from "react-router-dom";

const WebMail = () => {
  return (
    <div>
      <div className="contact-us">
        <div className="Contact-Logo">
          <img className="Con-img" src={ConLogo} alt=""></img>
        </div>
        <br></br>
        <div className="contact-us-container">
          <div className="contact-us-content1">
            <img className="contact-logo" src={contactuslogo} alt=""></img>
          </div>

          <div className="contact-us-content2">
            <div className="GET-Backhome">
              <div className="Back-Home">
                <h5>
                  <Link className="B-H" to="/">
                    Back Home
                  </Link>
                </h5>
              </div>
            </div>
            <div className="Get-in-touch">
              <h3>Get in Touch</h3>
            </div>
            <br></br>

            {/* FORM //////////////////////////////////////////////////////////////////////////////////// */}
            <form
              className="contact-form"
              action="https://formspree.io/f/xvoebejw"
              method="POST"
            >
              <div className="form-group">
                <img className="fas fa-user" src={nameicon} alt=""></img>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div className="form-group">
                <img className="fas fa-user" src={emailicon} alt=""></img>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button className="Contact-Button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebMail;
