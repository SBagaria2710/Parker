import React from "react";
import { generateRandomCarDetail } from "../assets/ts/RegistrationNumberGenerator";

export const IncomingCarDetailForm = (props) => {
  const {
    checkSlotAvailability,
    handleIncomingCar,
    handleRandomRegistration,
    incomingCarDetail,
  } = props;
  return (
    <div className="container-fluid">
      <div className="custom-card">
        <h5
          style={{
            marginBottom: "20px",
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Manual Parking
        </h5>
        <form className="form-group" onSubmit={checkSlotAvailability}>
          <label htmlFor="Record registration number for incoming car">
            Registration Number:
            <input
              className="col-12"
              type="string"
              name="RegistrationNumber"
              placeholder="eg. KA-10-GI-2710"
              onChange={handleIncomingCar}
            />
          </label>
          <div className="form-inline">
            <label htmlFor="Incoming Car Color">
              &nbsp; Color:
              <select
                style={{ marginLeft: ".5rem" }}
                className="form-control"
                value={incomingCarDetail.Color}
                onChange={handleIncomingCar}
                name="Color"
              >
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
              </select>
            </label>
          </div>
          <br />
          <button
            className="btn btn-outline-dark"
            style={{ width: "100%" }}
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
      <form className="form-group" onSubmit={checkSlotAvailability}>
        <button
          style={{ width: "100%" }}
          className="btn btn-outline-dark"
          name="RegistrationNumber"
          onClick={() => handleRandomRegistration(generateRandomCarDetail())}
        >
          + Park random car
        </button>
      </form>
    </div>
  );
};
