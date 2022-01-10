import React from "react";
import { map } from "../images";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="title">
        Find us near your <br /> city.
      </h2>
      <div className="features-content">
        <div className="features-left">
          <div className="features-heading">
            <div className="features-heading-left">
              <h3>Pickup restaurant</h3>
              <input type="text" placeholder="Enter your location" />
            </div>
            <div className="features-heading-right">
              <div className="circle1">
                <div className="circle2"></div>
                <span className="text-circle">10m.</span>
              </div>
            </div>
          </div>
          <div className="features-description">
            <FeaturesCard
              title="DEPATURE"
              input="Pickup restaurant point"
              description="427  Edington Drive"
            />
            <FeaturesCard
              title="ARRIVE"
              input="Drop home location"
              description="4130  Public Works Drive"
            />
          </div>
        </div>
        <img src={map} alt="" className="features-right" />
      </div>

      <div className="features-subscribe">
        <div className="features-subscribe-content">
          <h3>Subscribe newsletter</h3>
          <p>
            Best cooks and best delivery guys all at your service. Hot tasty
            food
          </p>
        </div>
        <div className="features-subscribe-form">
          <input type="text" placeholder="Enter your email address ..." />
          <button type="submit">
            Discover
            <div className="btn-icon">
              <i class="fas fa-chevron-right"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
