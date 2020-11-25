import React from "react";
import "rc-slider/assets/index.css";
import "./Navbar.scss";

import Slider from "rc-slider";

const Navbar = ({ level, changeLevel }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/" alt="color picker link">
          reactcolorpalette
        </a>
      </div>
      <div className="slider-container">
        <span>level: {level}</span>
        <div className="slider">
          {" "}
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
            step={100}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
