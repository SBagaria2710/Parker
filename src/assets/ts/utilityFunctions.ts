import { ISlot } from '../../interfaces/Slot'

export const generateEmptySlots = ( n:number ):ISlot[] => {
    let slotData:Array<ISlot> = []
    for(let i=1 ; i<=n ; i++) {
        let slotObj:ISlot = {
            availability: true,
            id: i,
            car: {
                RegistrationNumber : '',
                Color: ''
            }
        }
        slotData.push(slotObj);
    }
    return slotData
}

export const calculateFloors = ( n:number ):number[] => {
    let totalFloors = Math.floor(n / 12)
    let carsOnTopFloor = n % 12
    return [totalFloors, carsOnTopFloor]
}

export const filterByAvailability = ( slot:ISlot ):boolean => {
	if(slot.availability) return true;
	return false;
}

export const findNearestSlot = (slotData):number => {
    let availableSlots = slotData.filter(filterByAvailability)
    if(!availableSlots.length) return 0
    return availableSlots[0].id
}