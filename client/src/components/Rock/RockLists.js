import React from "react";
import RockListItem from "./RockListItem";
import "./RockLists.css";

const RockLists = ({ rocks, delHandler, doneHandler }) => {
  if (rocks.length <= 0) {
    return (
      <div className="jumbotron text-center">
        <h1 className="text-strong"> Big Rocks are for Big Dreams!</h1>
        <h4>What are yours?</h4>
      </div>
    );
  }

  return (
    <span className="font-link">
      <div className="listWrap">
        <ul className="list-group">
          {rocks &&
            rocks.length > 0 &&
            rocks.map((rock) => (
              <RockListItem
                key={rock.id}
                id={rock.id}
                title={rock.title}
                done={rock.done}
                delHandler={delHandler}
                doneHandler={doneHandler}
              />
            ))}
        </ul>
      </div>
    </span>
  );
};

export default RockLists;
