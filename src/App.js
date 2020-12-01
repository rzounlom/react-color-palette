import React, { Component } from "react";
import Palette from "./components/Palette/Palette";
import PaletteeList from "./components/PaletteList/PaletteList";
import { PaletteColors } from "./seedColors";
import { generatePalette } from "./utils/colorHelpers";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

class App extends Component {
  findPalette = (id) => PaletteColors.find((palette) => palette.id === id);

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteeList palettes={PaletteColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routerProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div className="App">
      //   <Palette palette={generatePalette(PaletteColors[4])} />
      // </div>
    );
  }
}

export default App;
