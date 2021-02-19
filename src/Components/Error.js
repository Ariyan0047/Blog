import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="contents">
      <h1>404 error</h1>
      <h2>page not found</h2>
      <Link to="/">redirect to home page</Link>
    </div>
  );
};

export default Error;
