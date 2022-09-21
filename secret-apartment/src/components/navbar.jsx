import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {

  return (
    <nav className="navBar">
      <ul className="nav-links">
        <li>
          <Link className="link" to="/">
            Landing
          </Link>
        </li>

        <li>
          <Link className="link" to="/main">
            Main
          </Link>
        </li>

        <li>
          <Link className="link" to="/notification">
            Notification
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
