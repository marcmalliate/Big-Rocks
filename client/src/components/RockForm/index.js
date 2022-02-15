import React, { useState } from "react";

function RockForm(props) {
  const [input, setInput] = useState("");
  let [eagerness, setEagerness] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = "low";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput("");
    setEagerness("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="rock-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are your Big Rocks?      "
          value={input}
          name="text"
          className="rock-input"
          onChange={handleChange}
        ></input>
        <button className="rock-button">Add a Big Rock </button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="rock-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="rock-input"
          onChange={handleChange}
        ></input>
        <button className="rock-button">Update</button>
      </form>
    </div>
  );
}

export default RockForm;
