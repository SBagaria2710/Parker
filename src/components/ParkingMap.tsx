import React from "react";

//Components
import { Slot } from "./Slot";

//Interfaces and Styles
import { IAppState } from "../interfaces/GenericInterface";
import { ISlot } from "../interfaces/Slot";
import { ICarDetail } from "../interfaces/CarDetail";
import "../styles/components/ParkingMap.css";

export const ParkingMap = (props) => {
  let slots = props.slotData.map((slot) => <Slot data={slot} key={slot.id} />);
  return (
    <div className="floor-map-body">
      <div className="col-5 floor-entry-sign">Entry</div>
      {props.submittedInitialValues && (
        <div className="row" style={{ width: "100%", height: "auto" }}>
          {slots}
        </div>
      )}
    </div>
  );
};
