import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <Link to="/">
        <h2>Fake Online Store</h2>
      </Link>
    </div>
  );
};

export default Header;
