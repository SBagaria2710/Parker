import React from "react";

export const IncomingCarDetailForm = (props) => {
  return (
    <div className="container-fluid">
      <div className="custom-card">
        <form className="form-group" onSubmit={props.checkSlotAvailability}>
          <label htmlFor="Record registration number for incoming car">
            Registration Number:
            <input
              className="col-12"
              type="string"
              name="RegistrationNumber"
              placeholder="eg. KA-10-GI-2710"
              onChange={props.handleIncomingCar}
            />
          </label>
          <div className="form-inline">
            <label htmlFor="Incoming Car Color">
              {" "}
              Color:
              <select
                style={{ marginLeft: ".5rem" }}
                className="form-control"
                value={props.incomingCarDetail.Color}
                onChange={props.handleIncomingCar}
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
          <button className="btn btn-outline-dark" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
