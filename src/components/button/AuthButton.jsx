import React from "react";

const AuthButton = (props) => {
  return (
    <a href="/" className="btn btn-outline">
      <img src={props.iconUrl} alt="" />
      {props.children}
    </a>
  );
};

export default AuthButton;
