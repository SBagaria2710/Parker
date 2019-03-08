import React from 'react';

//Components and Containers
import Navigation from '../components/Navbar';
import { ParkingSummary } from '../components/parkingSummary';
import { InitialForm } from '../components/initialForm';
import { ParkingMap } from '../components/ParkingMap';
import { IncomingCarDetailForm } from '../components/IncomingCarDetail';
import { ParkingTable } from '../components/ParkingTable';

//Functions, Interfaces and Styles
import { calculateFloors, generateEmptySlots, findNearestSlot } from '../assets/ts/utilityFunctions'
import { generateRandomCarDetails } from '../assets/ts/RegistrationNumberGenerator'
import { IAppState } from '../interfaces/GenericInterface'
import { ISlot } from '../interfaces/Slot'
import { ICarDetail } from '../interfaces/CarDetail'
import '../styles/containers/Home.css'

interface IProps { }
class Home extends React.Component<IProps, IAppState> {
    constructor(props) {
        super(props);
        this.state = {
            Level: 'Ground',
            N: 0,
            M: 0,
            submittedInitialValues: false,
            parkedCarsDetail: [],
            incomingCarDetail: {
                RegistrationNumber: '',
                Color: 'Red'
            },
            slotData: []
        }
    }

    handleChange = (event): void => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        } as any);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { N, M } = this.state
        if (N >= M && N > 0 && M > 0) {
            this.initializeMap()
            this.setState({ submittedInitialValues: true })
        }
        else {
            alert("Something's wrong with initial values")
            this.setState({ N: 0, M: 0 })
        }
    }

    handleIncomingCar = (event) => {
        const { name, value } = event.target;
        let incomingCarDetail: ICarDetail = { ...this.state.incomingCarDetail, [name]: value };
        this.setState({ incomingCarDetail });
    }

    checkSlotAvailability = (event) => {
        event.preventDefault();
        if (this.parkCar(this.state.incomingCarDetail))
            console.log('Done')
        else console.log('Slot Not Available')
    }

    parkCar = (newCarDetail): boolean | void => {
        let tempSlotData = JSON.parse(JSON.stringify(this.state.slotData))
        let availableSlotId = findNearestSlot(tempSlotData)
        if (availableSlotId) {
            tempSlotData[availableSlotId-1] = {
                availability: false,
                id: availableSlotId,
                car: {
                    RegistrationNumber: newCarDetail.RegistrationNumber,
                    Color: newCarDetail.Color
                }
            }
            this.setState({ slotData: tempSlotData })

            //Another Try
            // if(this.state.slotData.length) {
            //     this.setState(prevState => {
            //         const slotData:any = prevState.slotData.map((obj) => {
            //             obj.id == availableSlotId ? ({
            //                 ...obj,
            //                 availability: !obj.availability,
            //                 car: {
            //                     ...obj.car,
            //                     RegistrationNumber: newCarDetail.RegistrationNumber,
            //                     Color: newCarDetail.Color
            //                 }
            //             }) : obj
            //         })
            //         return slotData;
            //     })
            // }
            return true;
            }
            return false;
            // let slotData = this.state.slotData.map(slot => {
            //     if(slot['id'] == availableSlotId) {
            //         console.log('Here am I')
            //         slot = {...slot, availability: false};
            //         slot['car'] = {
            //             ...slot['car'],
            //             RegistrationNumber: newCarDetail.RegistrationNumber, 
            //             Color: newCarDetail.Color
            //         }
            //     }
            // })
        }

        populateSlotData = (): void => {
            console.log('here')
            let randomCarDetails: ICarDetail[] = generateRandomCarDetails(this.state.M);
            randomCarDetails.forEach((randomCarDetail) => {
                if (this.parkCar(randomCarDetail)) console.log('Done');
                else console.log('Slot Not Available');
            })
            console.log('now there')
        }

        delSlot = (id: number) => {
            console.log('Delete Car at SlotID: ', id)
        }

        initializeMap = (): void => {
            this.setState({ slotData: generateEmptySlots(this.state.N) },
                () => this.populateSlotData()
            );
            calculateFloors(this.state.N);
        }

        render() {
            const { submittedInitialValues } = this.state
            { submittedInitialValues && this.initializeMap }
            return (
                <div>
                    <Navigation />
                    <div className='container-fluid home-container'>
                        {/* {submittedInitialValues ? <div className='alert alert-success'>You got it right!</div> : null } */}
                        <div className='row' style={{ height: '100%' }}>
                            <div className='form-container col-md-4 col-lg-3 col-12'>
                                {!submittedInitialValues &&
                                    <InitialForm
                                        N={this.state.N}
                                        M={this.state.M}
                                        handleChange={this.handleChange}
                                        handleSubmit={this.handleSubmit}
                                    />
                                }
                                {submittedInitialValues &&
                                    <IncomingCarDetailForm
                                        checkSlotAvailability={this.checkSlotAvailability}
                                        handleIncomingCar={this.handleIncomingCar}
                                        incomingCarDetail={this.state.incomingCarDetail}
                                    />
                                }
                            </div>
                            <div className='col-md-8 col-lg-9 col-12'>
                                {/* <ParkingTable 
                                slotData={this.state.slotData}
                                delSlot={this.delSlot}
                            /> */}
                                <ParkingSummary
                                    N={this.state.N}
                                    M={this.state.M}
                                    Level={this.state.Level}
                                    handleChange={this.handleChange}
                                />
                                <ParkingMap
                                    N={this.state.N}
                                    M={this.state.M}
                                    slotData={this.state.slotData}
                                    Level={this.state.Level}
                                    submittedInitialValues={this.state.submittedInitialValues}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default Home;