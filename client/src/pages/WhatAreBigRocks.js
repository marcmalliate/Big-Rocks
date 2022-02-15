import React from "react";
import "./WhatAreBigRocks.css";
import { Link } from "react-router-dom";

const WhatAreBigRocks = () => {
  return (
    <main>
      <div className="wabr-background">
        <div className="wabr-para flex-row justify-center">
          <div className="wabr-heading flex-row justify-center">
            What are Big Rocks?
          </div>
          <br></br>
          All high-achievers face the same problem at some point.
          <br></br>
          <br></br>
          Too many things you want to do. And not enough hours in a day to do
          them all. <br></br>
          <br></br>
          It can be a terrible, constricting feeling.
          <br></br>
          <br></br>
          The problem is that most of us get bombarded with so many small tasks
          each day that <br></br>
          it's impossible to make any progress on the things that we really want
          to achieve, <br></br>
          our Big Rocks.
          <br></br>
          <br></br>
          IMAGE <br></br>
          <br></br>
          The key is put your Big Rocks in first. <br></br>
          <br></br>
          <br></br>
          IMAGE <br></br>
          <br></br>
          <br></br>
          So what are we waiting for, Let's put in your Big Rocks! <br></br>
          <br></br>
          <div className="getstarted flex-row justify-center">
            <Link
              className="btn btn-lg btn-light m-2 flex-row justify-center"
              to="/signup"
            >
              Get Started
            </Link>
          </div>
          <br></br>
        </div>
      </div>
    </main>
  );
};

export default WhatAreBigRocks;
