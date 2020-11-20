import React, { Component } from "react";
import "./ColorBox.scss";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        <span>{name}</span>
      </div>
    );
  }
}

export default ColorBox;
