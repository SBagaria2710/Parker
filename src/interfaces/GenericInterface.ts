import { ICarDetail } from "./CarDetail";
import { ISlot } from "./Slot";

export interface IAppState {
  activeLevel: number;
  N: number;
  M: number;
  availableFloors: number;
  submittedInitialValues: boolean;
  parkedCarsDetail: string[];
  incomingCarDetail: ICarDetail;
  slotData: ISlot[];
}
