import React from "react";

export const InitialForm = (props) => {
  const { N, M, handleChange, handleSubmit } = props;
  const todo = [
    "Unpark Cars to free slots",
    "Click on slot to park car to that individual slot",
    "Maintain a table to display level wise car status",
    "Download CSV for current car slot and level status",
    "Make certain slots reserved, and could only be parked with password",
  ];
  return (
    <div className="container-fluid">
      <div className="custom-card">
        <form className="form-group" onSubmit={() => handleSubmit()}>
          <label>
            Parking Capacity:
            <input
              className="col-12"
              type="number"
              name="N"
              value={N}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            Initial Parked Cars:
            <input
              className="col-12"
              type="number"
              name="M"
              value={M}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <br />
          <button className="btn btn-outline-dark" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
      <div style={{ marginTop: "50px" }}>
        <h6>To Do:</h6>
        <ul className="list-group">
          {todo.map((item, i) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
