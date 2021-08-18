import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <strong>
            <span className="px-3">🚚</span>Fake Online Store
          </strong>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
