import { ICarDetail } from './CarDetail'
import { ISlot } from './Slot'

export interface IAppState {
    Level: string
    N: number
    M: number
    submittedInitialValues: boolean
    parkedCarsDetail: string[]
    incomingCarDetail: ICarDetail
    slotData: ISlot[]
}