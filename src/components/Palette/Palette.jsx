import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Slider from "rc-slider";
import "./Palette.scss";
import "rc-slider/assets/index.css";
import Navbar from "../Navbar/Navbar";

class Palette extends Component {
  state = {
    level: 500,
  };
  changeLevel = (level) => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color.hex} name={color.name} />;
    });
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer  goes here */}
      </div>
    );
  }
}

export default Palette;
