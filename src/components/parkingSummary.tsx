import React from "react";
import "../styles/components/parkingSummary.css";

export const ParkingSummary = (props) => {
  const { M, N, handleChange, Level } = props;
  return (
    <div
      className="row container-fluid"
      style={{ justifyContent: "space-between", marginBottom: "15px" }}
    >
      <p className="inline-heading">Level Chosen: {Level}</p>
      <p className="inline-heading">Total Parking Slots: {N}</p>
      <p className="inline-heading">Parking Slots Available: {N - M}</p>
      <div className="form-inline">
        <label htmlFor="Level">
          &nbsp; Level:
          <select
            style={{ marginLeft: ".5rem" }}
            className="form-control"
            value={Level}
            onChange={(e) => handleChange(e)}
            name="Level"
          >
            <option value="Ground">0</option>
            <option value="First">1</option>
            <option value="Second">2</option>
            <option value="Third">3</option>
          </select>
        </label>
      </div>
    </div>
  );
};
