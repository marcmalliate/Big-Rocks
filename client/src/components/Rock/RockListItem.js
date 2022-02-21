import React from "react";

const RockListItem = ({ id, title, delHandler, doneHandler, done }) => {
  return (
    <span className="font-link">
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${
          done ? "bg-success" : ""
        }`}
      >
        {done && <del>{title}</del>}
        {!done && <>{title}</>}
        <div>
          <button
            className="btn btn-sm btn-danger mr-2"
            onClick={() => delHandler(id)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
          <button
            className={`btn btn-sm ${done ? "btn-warning" : "btn-success"}`}
            onClick={() => doneHandler(id)}
          >
            {done ? (
              <i className="fas fa-undo-alt"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </button>
        </div>
      </li>
    </span>
  );
};

export default RockListItem;
