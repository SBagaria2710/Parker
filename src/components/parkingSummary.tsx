import React from "react";
import { times } from "../assets/ts/utilityFunctions";
import "../styles/components/parkingSummary.css";

//<option value="Ground">0</option>

const decideLevelName = (num: number) => {
  switch (num) {
    case 0:
      return "Ground";
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${num}th`;
  }
};

const Levels = (availableFloors: number) => {
  let tempArr: any = [],
    a = 0;
  times(availableFloors, (i: number) => {
    tempArr.push(a++);
  });
  return tempArr.map((val: number) => (
    <option value={decideLevelName(val)}>{val}</option>
  ));
};

export const ParkingSummary = (props) => {
  const { M, N, handleChange, activeLevel, availableFloors } = props;
  return (
    <div
      className="row container-fluid"
      style={{ justifyContent: "space-between", marginBottom: "15px" }}
    >
      <p className="inline-heading">Level Chosen: {activeLevel}</p>
      <p className="inline-heading">Total Parking Slots: {N}</p>
      <p className="inline-heading">Parking Slots Available: {N - M}</p>
      <div className="form-inline">
        <label htmlFor="activeLevel">
          &nbsp; Level:
          <select
            style={{ marginLeft: ".5rem" }}
            className="form-control"
            value={activeLevel}
            onChange={(e) => handleChange(e)}
            name="activeLevel"
          >
            {Levels(availableFloors)}
          </select>
        </label>
      </div>
    </div>
  );
};
