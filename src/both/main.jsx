import React from "react";
import { Link } from "react-router-dom";
import './main.css';

const main = () => {
  return (
  <div>
  <header>
  <h1 class='fadein'>Mainpage</h1>
  <nav>
    <Link to='/Youngminmain' class='fadein'>Youngmin</Link>
    <Link to='/Jewonmain' class='fadein'>Jewon</Link>
  </nav>
</header>

<h2 class='asdf'>ㅁㄴㅇㄹ</h2>
</div>
  );
};

export default main;
