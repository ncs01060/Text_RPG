import React from "react";
import { Link } from "react-router-dom";
import './main.css';

const main = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <hr></hr>
      <button to="/youngminMain" class='ymm'>YoungminMain</button>
      <button to="/jewonMain" class='jwm'>JewonMain</button>
    </div>
  );
};

export default main;
