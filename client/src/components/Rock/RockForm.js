import React from "react";
import "./RockForm.css";

const RockForm = ({ error, value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div className="form-group row align-items-center">
        <div className="col-9 pr-0">
          <input
            type="text"
            className="form-control-plaintext align-text-center"
            placeholder="What's your Big Rock?"
            required
            value={value}
            onChange={onChange}
          />
          {error && <small className="form-text text-danger">{error}</small>}
        </div>
        <div className="col-7 text-right">
          <button type="submit" className="btn btn-primary text-center">
            Add Rock
          </button>
        </div>
      </div>
    </form>
  );
};

export default RockForm;
