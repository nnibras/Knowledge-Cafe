import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <h2>Knowledge Cafe</h2>
        <nav>
          <a href="/login">Login</a>
          <a href="/vlogs">Vlogs</a>
          <a href="/contactUs">Contact Us</a>
        </nav>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
