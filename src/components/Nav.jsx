import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="Nav">
      <div className="firstNavItem">
        <Link to="/">
          <h1>HACKFLIX</h1>
        </Link>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <Link to="/search-by-name">
        <p>Search By Name</p>
      </Link>
    </div>
  );
}

export default Nav;
