import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import Slider from "./components/Slider";
import MediaSection from "./components/MediaSection";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Slider />
      <MediaSection title="Assista a seguir" />
      <MediaSection title="Séries Prime Originals" seeMore />
    </Fragment>
  );
}

export default App;
