import React from "react";

export const InitialForm = (props) => {
  const { N, M, handleChange, handleSubmit } = props;
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
    </div>
  );
};
