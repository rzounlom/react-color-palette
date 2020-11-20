import React, { Component } from "react";
import "./ColorBox.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  state = {
    copied: false,
  };
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
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
