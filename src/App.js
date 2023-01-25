import React, { Component } from "react";
import Palette from "./Palette";
import seedColor from "./seedColor";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColor[2]} />
      </div>
    );
  }
}

export default App;
