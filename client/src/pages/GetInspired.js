import React from "react";
import "./GetInspired.css";
import image1 from "../images/Success.png";

const GetInspired = () => {
  return (
    <main>
      <div className="getin-background">
        <div className="getin-para flex-row justify-center">
          <div className="getin-heading flex-row justify-center">
            Some 'Seize the Day' Stuff
          </div>
          <br></br>- The average lifespan is only 4000 weeks.<br></br>
          What will you do with yours? <br></br>
          <br></br>
          <br></br>- “Every action you take is a vote for the type of person you
          wish to become. <br></br>
          No single instance will transform your beliefs, but as the votes build
          up, <br></br>
          so does the evidence of your new identity.”<br></br>
          James Clear - Atomic Habits<br></br>
          <br></br>
          <br></br>- You are 42% more likely to achieve your goals if you write
          them down.
          <br></br>
          <br></br>
          <img src={image1} alt="Success" />
          <br></br>
        </div>
      </div>
    </main>
  );
};

export default GetInspired;
