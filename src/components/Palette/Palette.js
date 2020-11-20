import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import "./Palette.scss";

class Palette extends Component {
  render() {
    const colorBoxes = () =>
      this.props.colors.map((color) => {
        return (
          <ColorBox background={color.color} name={color.name} key={color.id} />
        );
      });
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes()}</div>
        {/* Footer  goes here */}
      </div>
    );
  }
}

export default Palette;
