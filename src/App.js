import React, { Component } from "react";
import Palette from "./components/Palette/Palette";
import { PaletteColors } from "./seedColors";
import { generatePalette } from "./utils/colorHelpers";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(PaletteColors[4])} />
      </div>
    );
  }
}

export default App;
