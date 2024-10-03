import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to={"/"}>
          <a className="navbar-brand">Navbar</a>
        </Link>
        <form className="form-inline">
          FILTER COUSTOMER
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
