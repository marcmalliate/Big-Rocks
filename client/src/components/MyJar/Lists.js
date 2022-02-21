import React from "react";
import ListItem from "./ListItem";

const Lists = ({ todos, delHandler, doneHandler }) => {
  if (todos.length <= 0) {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-strong">Remember, add your Big Rocks first.</h1>
        <h4>You'll still have time for the pebbles!</h4>
      </div>
    );
  }

  return (
    <span className="font-link">
      <div className="listWrap">
        <ul className="list-group">
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => (
              <ListItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                done={todo.done}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            ))}
        </ul>
      </div>
    </span>
  );
};

export default Lists;
