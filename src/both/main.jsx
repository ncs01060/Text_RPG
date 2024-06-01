import React from "react";
import { Link } from "react-router-dom";
import style from './main.module.css'

const main = () => {
  return (
  <div className={style.mainbg}>
  <header>
  <h1 className={style.fadein}>Mainpage</h1>
  <nav>
    <Link to='/Youngminmain' className={style.fadein}><button>Youngmin</button></Link>
    <Link to='/Jewonmain' className={style.fadein}><button>Jewon</button></Link>
  </nav>
</header>

<h2 className={style.asdf}>ㅁㄴㅇㄹ</h2>
</div>
  );
};

export default main;
