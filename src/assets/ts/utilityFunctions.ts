import { ISlot } from "../../interfaces/Slot";
import { generateRandomCarDetails } from "./RegistrationNumberGenerator";

export const generateEmptySlots = (n: number, m: number = 0): ISlot[] => {
  const initialFilledSlots = generateRandomCarDetails(m);
  let slotData: Array<ISlot> = [];
  for (let i = 1, j = 1; i <= n; i++, j++) {
    let slotObj: ISlot = {
      availability: true,
      id: i,
      level: i % 12 === 0 ? Math.floor(i / 12) - 1 : Math.floor(i / 12),
      car: {
        RegistrationNumber: "",
        Color: "",
      },
    };
    if (j <= m) {
      slotObj = {
        ...slotObj,
        car: initialFilledSlots[j - 1],
        availability: false,
      };
    }
    slotData.push(slotObj);
  }
  return slotData;
};

export const calculateFloors = (n: number): number => {
  let totalFloors = Math.ceil(n / 12);
  return totalFloors;
};

export const filterByAvailability = (slot: ISlot): boolean => {
  if (slot.availability) return true;
  return false;
};

export const findNearestSlot = (slotData): number => {
  let availableSlots = slotData.filter(filterByAvailability);
  if (!availableSlots.length) return 0;
  return availableSlots[0].id;
};

export const times = function (n: number, iterator: any) {
  var accum = Array(Math.max(0, n));
  for (var i = 0; i < n; i++) {
    accum[i] = iterator.call(i);
  }
  return accum;
};
