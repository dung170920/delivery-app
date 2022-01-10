import React from "react";
import "./sass/app.scss";
import { Header, Service, Menu, Footer, Features } from "./components";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Fade left>
          <Service />
        </Fade>
        <Fade right>
          <Menu />
        </Fade>
        <Fade left>
          <Features />
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default App;
