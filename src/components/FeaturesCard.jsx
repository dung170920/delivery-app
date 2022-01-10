import React from "react";

const FeaturesCard = (props) => {
  return (
    <div className="features-card">
      <h4 className="features-card-title">{props.title}</h4>
      <input type="text" placeholder={props.input} />
      <div className="features-card-footer">
        <span className="features-card-description">{props.description}</span>
        <span className="features-card-icon">
          <i className="fas fa-location"></i>
        </span>
      </div>
    </div>
  );
};

export default FeaturesCard;
