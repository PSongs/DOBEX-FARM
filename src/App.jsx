import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";
import WebMail from "./Pages/WebMail";
import ScrollToTop from './Components/ScrollToTop';
import "./App.css";

function App() {

  return (
    <>
       <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element= {<AboutUs />} />
          <Route path="/services" element= {<OurServices />} />
          <Route path="/contact" element= {<ContactUs />} />
          <Route path="/web" element= {<WebMail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
