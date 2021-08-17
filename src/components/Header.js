import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <Link to="/">
        <h2>FakeShop</h2>
      </Link>
    </div>
  );
};

export default Header;
