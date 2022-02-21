import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from "../Header/header.png";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="nav-container text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <span className="font-link">
          <div>
            <Link className="text-light" to="/">
              <div className="header">
                {" "}
                <img src={image} alt="Logo" />
              </div>
            </Link>

            <p className="m-0">
              What are your goals for this year and how can you achieve them?
            </p>
          </div>

          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-light m-2" to="/jar">
                  My Jar
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/rocks">
                  My Rocks
                </Link>
                <span>Hiya, {Auth.getProfile().data.username}!</span>
                <Link
                  to="/"
                  className="btn btn-lg btn-light m-2"
                  onClick={logout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-light m-2" to="/getinspired">
                  Get Inspired
                </Link>
                <Link
                  className="btn btn-lg btn-light m-2"
                  to="/whatarebigrocks"
                >
                  What are Big Rocks?
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/login">
                  Login
                </Link>

                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </span>
      </div>
    </header>
  );
};

export default Header;
