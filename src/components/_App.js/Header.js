import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <div className="logo">
        <h1>
          <Link to="/">Dream Market</Link>
        </h1>
      </div>
      <ul className="searchH">
        <li>
          <input
            className="search"
            type="text"
            name=""
            placeholder="what are you looking?"
          ></input>
        </li>
      </ul>
      <ul className="main-nav">
        <li>
          <a href="#">
            <Link to={"/cart"}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </a>
        </li>
        <li>
          <a href="#">login</a>
        </li>
      </ul>
    </nav>
  );
}
