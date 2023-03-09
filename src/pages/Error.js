import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-card">
      <span>404</span>
      <Link to={"/"}>return to homepage</Link>
    </div>
  );
};

export default Error;
