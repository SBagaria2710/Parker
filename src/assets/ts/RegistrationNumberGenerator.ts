import { stateCode, carColor } from "../../constants/registrationNumber";
import { ICarDetail } from "../../interfaces/CarDetail";

const generateRandomNumber = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randomState = (): string => {
  let state: string = stateCode[generateRandomNumber(stateCode.length, 0)];
  return state;
};

const randomCityCode = (): string => {
  let cityCode: string = "";
  let numbers = "0123456789";
  for (let i = 0; i <= 1; i++)
    cityCode += numbers.charAt(generateRandomNumber(numbers.length, 0));
  return cityCode;
};

const randomletters = (): string => {
  let letters = "";
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i <= 1; i++)
    letters += alphabet.charAt(generateRandomNumber(alphabet.length, 0));
  return letters;
};

const randomCode = (): number => {
  let code: number = generateRandomNumber(10000, 1000);
  return code;
};

const randomCarColor = (): string => {
  let color: string = carColor[generateRandomNumber(carColor.length, 0)];
  return color;
};

export const generateRandomCarDetail = (): ICarDetail => {
  return {
    RegistrationNumber:
      randomState() +
      "-" +
      randomCityCode() +
      "-" +
      randomletters() +
      "-" +
      randomCode(),
    Color: randomCarColor(),
  };
};

export const generateRandomCarDetails = (M: number): ICarDetail[] => {
  let randomCarDetails: ICarDetail[] = [];
  for (let i = 1; i <= M; i++) {
    let regNumber: ICarDetail = generateRandomCarDetail();
    randomCarDetails.push(regNumber);
  }
  return randomCarDetails;
};
