import { ICarDetail } from "./CarDetail";
import { ISlot } from "./Slot";

export interface IAppState {
  activeLevel: string;
  N: number;
  M: number;
  availableFloors: number;
  submittedInitialValues: boolean;
  parkedCarsDetail: string[];
  incomingCarDetail: ICarDetail;
  slotData: ISlot[];
}
