import React from "react";
import { authImg } from "../../images";
import { Link } from "react-router-dom";

const AuthLeft = () => {
  return (
    <div className="auth-left">
      <div className="container">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            logo
          </Link>
        </div>
      </div>
      <img src={authImg} alt="" className="auth-image" />
    </div>
  );
};

export default AuthLeft;
