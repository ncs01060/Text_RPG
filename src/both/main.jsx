import React from "react";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <div className="p-8 m-8">
      <h1>MainPage</h1>
      <Link to="/youngminMain">youngminMain</Link>
      <br />
      <Link to="/jewonMain">jewonMain</Link>
    </div>
  );
};

export default main;
