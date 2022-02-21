import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <span className="font-link">
      <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="container text-center mb-5">
          {location.pathname !== "/" && (
            <button
              className="btn btn-light mb-3"
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          )}
          <h4>Remember, put your Big Rocks in first!</h4>
        </div>
      </footer>
    </span>
  );
};

export default Footer;
