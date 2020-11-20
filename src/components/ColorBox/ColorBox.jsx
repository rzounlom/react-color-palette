import React, { Component } from "react";
import "./ColorBox.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background: background }} className="ColorBox">
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            <span className="see-more">See More</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
