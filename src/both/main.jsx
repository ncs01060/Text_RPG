import React from "react";
import { Link } from "react-router-dom";
import './main.css';

const main = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <hr></hr>
      <Link to="/youngminMain"><button class='ymm'>YoungminMain</button></Link>
      <Link to="/jewonMain" ><button class='jwm'>JewonMain</button></Link>
    </div>
  );
};

export default main;
