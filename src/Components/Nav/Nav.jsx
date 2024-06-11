import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import nav from "/src/assets/LOGO.png";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="Nav">
        <img className="NavLogo" src={nav} alt="" />
        <div className="menu-icon">
          <Hamburger size={22} rounded toggled={isOpen} toggle={setIsOpen} />
        </div>
        <ul className={`Navul ${isOpen ? "active" : ""}`}>
          <li>
            <Link className="Nav-hover" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/services" onClick={closeMenu}>
              Our Products
            </Link>
          </li>
          <li>
            <Link className="Nav-hover" to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <a
              className="Nav-hover"
              href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AC3PFD7loYFznvRb1t045zxYUv2CCYKXsAYxCXBFC4QnolnlZhIDrZ0NtYWPNS5B&checkConnection=youtube:604&checkedDomains=youtube&cid=1&continue=https://mail.google.com/mail/u/0/&ddm=0&emr=1&flowName=GlifWebSignIn&followup=https://mail.google.com/mail/u/0/&hl=en_US&ifkv=AS5LTAQszIZYZLBVwfcDJY8YrPP-dPkHuPuBFrdI8TsNUWIRkZjBuigs3RIOwMZKSytF8gpQQ3kR&osid=1&pstMsg=1&service=mail"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Web Mail
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
