import React from "react";

//Components
import { Slot } from "./Slot";

//Interfaces and Styles
import { IAppState } from "../interfaces/GenericInterface";
import { ISlot } from "../interfaces/Slot";
import { ICarDetail } from "../interfaces/CarDetail";
import "../styles/components/ParkingMap.css";

interface IProps {
  slotData: ISlot[];
  activeLevel: number;
  submittedInitialValues: boolean;
}

export const ParkingMap = (props: IProps) => {
  const { slotData, activeLevel, submittedInitialValues } = props;
  return (
    <div className="floor-map-body">
      <div className="col-5 floor-entry-sign">Entry</div>
      {submittedInitialValues && (
        <div className="row" style={{ width: "100%", height: "auto" }}>
          {slotData
            .filter((slot: ISlot) => slot.level === activeLevel)
            .map((slot: ISlot) => (
              <Slot data={slot} key={slot.id} />
            ))}
        </div>
      )}
    </div>
  );
};
