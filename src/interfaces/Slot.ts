import { ICarDetail } from "./CarDetail";

export interface ISlot {
  availability: boolean;
  id: number;
  car?: ICarDetail;
  level?: number;
}
