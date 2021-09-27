import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";



export function Navbar(params) {
  return (
    <nav>
      <div className="nav_logo">
        <Link to="Home">Home</Link>
      </div>
      <div className="nav_navigatin">
        <Link to="pogoda">Погода</Link>
        <Link to="/calculyator">Калькулятор</Link>
        <Link to="/schotchik">Счётчик</Link>
        <Link to="/foto">Фото</Link>
        <Link to="/kontackt">Контакты</Link>
      </div>
      <div className="nav_cotackt">
        <Link to="/">
          <button>Submit</button>
        </Link>
      </div>
    </nav>
  );
}
