import React, { FormEvent } from "react";
import isEmpty from "lodash/isEmpty";

//Components and Containers
import Navigation from "../components/Navbar";
import { ParkingSummary } from "../components/parkingSummary";
import { InitialForm } from "../components/initialForm";
import { ParkingMap } from "../components/ParkingMap";
import { IncomingCarDetailForm } from "../components/IncomingCarDetail";
import { ParkingTable } from "../components/ParkingTable";

//Functions, Interfaces and Sty(les
import {
  calculateFloors,
  generateEmptySlots,
  findNearestSlot,
} from "../assets/ts/utilityFunctions";
import {
  generateRandomCarDetails,
  generateRandomCarDetail,
} from "../assets/ts/RegistrationNumberGenerator";
import { IAppState } from "../interfaces/GenericInterface";
import { ISlot } from "../interfaces/Slot";
import { ICarDetail } from "../interfaces/CarDetail";
import "../styles/containers/Home.css";

interface IProps {}
class Home extends React.Component<IProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      activeLevel: 0,
      availableFloors: 0,
      N: 0,
      M: 0,
      submittedInitialValues: false,
      parkedCarsDetail: [],
      incomingCarDetail: {
        RegistrationNumber: "",
        Color: "Red",
      },
      slotData: [],
    };
  }

  handleChange = (event: any): void => {
    if (
      event.target.name === "M" ||
      event.target.name === "N" ||
      event.target.name === "activeLevel"
    ) {
      this.setState({
        [event.target.name]: parseInt(event.target.value),
      } as any);
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      } as any);
    }
  };

  handleSubmit = () => {
    const { N, M } = this.state;
    if (N >= M && N > 0 && M > 0) {
      this.initializeMap();
      this.setState((prevState) => ({
        submittedInitialValues: !prevState.submittedInitialValues,
      }));
    } else {
      alert("Something's wrong with initial values");
      this.setState({ N: 0, M: 0 });
    }
  };

  handleIncomingCar = (event: any) => {
    const { name, value } = event.target;
    let incomingCarDetail: ICarDetail = {
      ...this.state.incomingCarDetail,
      [name]: value,
    };
    this.setState({ incomingCarDetail });
  };

  checkSlotAvailability = (event) => {
    event.preventDefault();
    const { incomingCarDetail } = this.state;
    if (incomingCarDetail.RegistrationNumber) {
      if (this.parkCar(incomingCarDetail)) console.log("Done");
      else console.log("Slot Not Available");
    }
  };

  parkCar = (newCarDetail): boolean | void => {
    const { slotData } = this.state;
    let availableSlotId = -1;
    const availableSlot = slotData.find((slot) => slot.availability);
    if (availableSlot) {
      availableSlotId = availableSlot.id;
    }
    const updatedSlotData = slotData.map((slot) => {
      if (slot.id === availableSlotId) {
        console.log(slot, newCarDetail, {
          ...slot,
          ...newCarDetail,
          availability: false,
        });
        return { ...slot, availability: false, ...{ car: newCarDetail } };
      }
      return slot;
    });
    this.setState({
      slotData: updatedSlotData,
    });
  };

  delSlot = (id: number) => {
    console.log("Delete Car at SlotID: ", id);
  };

  initializeMap = (): void => {
    const availableFloors = calculateFloors(this.state.N);
    this.setState({
      slotData: generateEmptySlots(this.state.N, this.state.M),
      availableFloors,
    });
  };

  render() {
    const { submittedInitialValues } = this.state;
    {
      submittedInitialValues && this.initializeMap;
    }
    return (
      <div>
        <Navigation />
        <div className="container-fluid home-container">
          <div className="row" style={{ height: "100%" }}>
            <div className="form-container col-md-4 col-lg-3 col-12">
              {submittedInitialValues ? (
                <IncomingCarDetailForm
                  checkSlotAvailability={this.checkSlotAvailability}
                  handleIncomingCar={this.handleIncomingCar}
                  incomingCarDetail={this.state.incomingCarDetail}
                />
              ) : (
                <InitialForm
                  N={this.state.N}
                  M={this.state.M}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              )}
            </div>
            <div className="col-md-8 col-lg-9 col-12">
              <ParkingSummary
                N={this.state.N}
                M={this.state.M}
                availableFloors={this.state.availableFloors}
                submittedInitialValues={this.state.submittedInitialValues}
                activeLevel={this.state.activeLevel}
                handleChange={this.handleChange}
              />
              <ParkingMap
                slotData={this.state.slotData}
                activeLevel={this.state.activeLevel}
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
