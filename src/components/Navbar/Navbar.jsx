import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "./Navbar.scss";
import { MenuItem, Select } from "@material-ui/core";

import Slider from "rc-slider";

class Navbar extends Component {
  state = {
    format: "hex",
  };
  handleChange = (e) => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };

  render() {
    const { format } = this.state;
    const { changeLevel, level } = this.props;
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
        <div className="select-container">
          <Select onChange={this.handleChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">HEX - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">HEX - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
