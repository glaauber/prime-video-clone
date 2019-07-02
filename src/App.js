import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Slider />
    </Fragment>
  );
}

export default App;
