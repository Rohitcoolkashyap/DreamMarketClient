import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";

export default function Header(props) {
  const [logout, setLogout] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (logout && userInfo) {
      Cookie.set("userInfo", JSON.stringify(0));
      window.location.reload();
      setLogout(false);
    }
  }, [logout]);

  return (
    <nav className="navbar">
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
          <Link to={"/cart"}>
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </li>
        <li>
          {userInfo ? (
            <Link to={userInfo.role === "admin" ? "/admin" : "/profile"}>
              {userInfo.role === "admin" ? "admin" : userInfo.name}
            </Link>
          ) : (
            <Link to={"/signin"}>signin</Link>
          )}
          <Link className="logout" onClick={() => setLogout(true)} to={"/"}>
            logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
