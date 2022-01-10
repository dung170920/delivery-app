import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import { bubble, headerImg } from "../images";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="half-circle">
        <img src={bubble} alt="" />
      </div>
      <Navbar />
      <div className="header-container">
        <Fade left>
          <div className="header-content">
            <h2 className="header-heading title">
              Wait a minute for delicious.
            </h2>
            <p className="description">
              Best cooks and best delivery guys all at your service. Hot tasty
              food will reach you in 20mins
            </p>
            <Button className="btn btn-primary">View More</Button>
          </div>
        </Fade>

        <Fade right>
          <div className="header-image">
            <img src={headerImg} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
