import React, { Component } from "react";
import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
