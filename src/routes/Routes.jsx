import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Landing, SignIn, SignUp, NotFound } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" element={<Landing />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};

export default Routes;
