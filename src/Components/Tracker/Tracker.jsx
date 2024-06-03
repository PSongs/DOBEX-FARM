import React from "react";
import "./tracker.css";
import Track from "../Tracker/download.gif";

const Tracker = () => {
  const handleRedirect = () => {
    window.location.href = "https://statcounter.com/";
  };
  return (
    <div>
      <div className="Track">
        <button onClick={handleRedirect}>
          <img src={Track}></img>
        </button>
      </div>
    </div>
  );
};

export default Tracker;
