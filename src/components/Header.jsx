import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/secretsanta.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link className="headerLink" to={"/"}>
          <span>Secret Santa</span>
        </Link>
        <img className="icon" src={Icon} alt="Secret Santa"></img>
        <ul className="navigation">
          <Link className="headerLink" to={"/rooms"}>
            <li>rooms</li>
          </Link>
          <Link className="headerLink" to={"/users"}>
            <li>users</li>
          </Link>
          <Link className="headerLink" to={"/forms"}>
            <li>forms</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
