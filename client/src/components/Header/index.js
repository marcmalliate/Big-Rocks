import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="nav-container text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0"> Big Rocks</h1>
          </Link>
          <p className="m-0">
            What are your goals for this year and how can you achieve them?
          </p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hiya, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/rocks">
                My Rocks
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/jar">
                My Jar
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>

              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
