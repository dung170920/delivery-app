import React from "react";
import { Bounce } from "react-reveal";

const ServiceCard = (props) => {
  return (
    <Bounce cascade>
      <div className="service-card">
        <div className="service-card-image">
          <img src={props.img} alt="" />
        </div>
        <h4 className="service-card-title">{props.title}</h4>
        <p className="service-card-description">{props.description}</p>
      </div>
    </Bounce>
  );
};

export default ServiceCard;
