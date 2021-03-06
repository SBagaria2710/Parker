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
    <option value={val}>{decideLevelName(val)}</option>
  ));
};

export const ParkingSummary = (props) => {
  const {
    M,
    N,
    handleChange,
    activeLevel,
    availableFloors,
    submittedInitialValues,
  } = props;
  return (
    <div
      className="row container-fluid"
      style={{ justifyContent: "space-between", marginBottom: "15px" }}
    >
      <p className="inline-heading">
        Level Chosen: {submittedInitialValues ? activeLevel : "N/A"}
      </p>
      <p className="inline-heading">
        Total Parking Slots: {submittedInitialValues ? N : "N/A"}
      </p>
      <p className="inline-heading">
        Parking Slots Available: {submittedInitialValues ? N - M : "N/A"}
      </p>
      <div className="form-inline">
        {submittedInitialValues ? (
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
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
