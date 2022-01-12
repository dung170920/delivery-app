import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={`/${props.path}`} className={props.className}>
      {props.children}
    </Link>
  );
};

export default Button;
