import React from "react";
import {
  Food,
  minimumWage,
  operatingHours,
  Truck,
} from "../../pages/api/foodtruck/food";

export interface LaborCostEquationProps {
  selectedFood: Food;
  selectedTruck: Truck;
  selectedNumWorkers: string;

  laborCostEquationOneBoxOne: string;
  setLaborCostEquationOneBoxOne: (laborCostEquationOneBoxOne: string) => void;
  laborCostEquationOneBoxTwo: string;
  setLaborCostEquationOneBoxTwo: (laborCostEquationOneBoxTwo: string) => void;
  laborCostEquationOneBoxThree: string;
  setLaborCostEquationOneBoxThree: (
    laborCostEquationOneBoxThree: string
  ) => void;
  laborCostEquationOneBoxFour: string;
  setLaborCostEquationOneBoxFour: (laborCostEquationOneBoxFour: string) => void;

  laborCostEquationTwoBoxOne: string;
  setLaborCostEquationTwoBoxOne: (laborCostEquationTwoBoxOne: string) => void;
  laborCostEquationTwoBoxTwo: string;
  setLaborCostEquationTwoBoxTwo: (laborCostEquationTwoBoxTwo: string) => void;
  laborCostEquationTwoBoxThree: string;
  setLaborCostEquationTwoBoxThree: (
    laborCostEquationTwoBoxThree: string
  ) => void;
  laborCostEquationTwoBoxFour: string;
  setLaborCostEquationTwoBoxFour: (laborCostEquationTwoBoxFour: string) => void;
}

const LaborCostEquation = ({
  selectedFood,
  selectedTruck,
  selectedNumWorkers,
  laborCostEquationOneBoxOne,
  setLaborCostEquationOneBoxOne,
  laborCostEquationOneBoxTwo,
  setLaborCostEquationOneBoxTwo,
  laborCostEquationOneBoxThree,
  setLaborCostEquationOneBoxThree,
  laborCostEquationOneBoxFour,
  setLaborCostEquationOneBoxFour,
  laborCostEquationTwoBoxOne,
  setLaborCostEquationTwoBoxOne,
  laborCostEquationTwoBoxTwo,
  setLaborCostEquationTwoBoxTwo,
  laborCostEquationTwoBoxThree,
  setLaborCostEquationTwoBoxThree,
  laborCostEquationTwoBoxFour,
  setLaborCostEquationTwoBoxFour,
}: LaborCostEquationProps) => {
  const validateLaborCostEquationOneBoxOne = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationOneBoxOne) ===
        Number.parseInt(selectedNumWorkers),
      value: Number.parseInt(selectedNumWorkers),
    };
  };

  const validateLaborCostEquationOneBoxTwo = () => {
    return {
      isCorrect: Number.parseInt(laborCostEquationOneBoxTwo) === minimumWage,
      value: minimumWage,
    };
  };

  const validateLaborCostEquationOneBoxThree = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationOneBoxThree) === operatingHours,
      value: operatingHours,
    };
  };

  const validateLaborCostEquationOneAnswer = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationOneBoxFour) ===
        validateLaborCostEquationOneBoxOne().value *
          validateLaborCostEquationOneBoxTwo().value *
          validateLaborCostEquationOneBoxThree().value,
      value:
        validateLaborCostEquationOneBoxOne().value *
        validateLaborCostEquationOneBoxTwo().value *
        validateLaborCostEquationOneBoxThree().value,
    };
  };

  const validateLaborCostEquationTwoBoxOne = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationTwoBoxOne) ===
        selectedFood.qtyProducedPerWorkerHour *
          Number.parseInt(selectedNumWorkers) *
          operatingHours *
          selectedFood.unitCost,
      value:
        selectedFood.qtyProducedPerWorkerHour *
        Number.parseInt(selectedNumWorkers) *
        operatingHours *
        selectedFood.unitCost,
    };
  };

  const validateLaborCostEquationTwoBoxTwo = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationTwoBoxTwo) ===
        selectedTruck.fixedCost + selectedTruck.variableCost * operatingHours,
      value:
        selectedTruck.fixedCost + selectedTruck.variableCost * operatingHours,
    };
  };

  const validateLaborCostEquationTwoBoxThree = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationTwoBoxThree) ===
        validateLaborCostEquationOneAnswer().value,
      value: validateLaborCostEquationOneAnswer().value,
    };
  };

  const validateLaborCostEquationTwoAnswer = () => {
    return {
      isCorrect:
        Number.parseInt(laborCostEquationTwoBoxFour) ===
        validateLaborCostEquationTwoBoxOne().value +
          validateLaborCostEquationTwoBoxTwo().value +
          validateLaborCostEquationTwoBoxThree().value,
      value:
        validateLaborCostEquationTwoBoxOne().value +
        validateLaborCostEquationTwoBoxTwo().value +
        validateLaborCostEquationTwoBoxThree().value,
    };
  };

  const validateComponent = () => {
    return (
      validateLaborCostEquationOneAnswer().isCorrect &&
      validateLaborCostEquationTwoAnswer().isCorrect
    );
  };

  const equationContainerCSS = (
    inputBox: string,
    validateFunction: boolean
  ) => {
    if (inputBox.length === 0) {
      return "border-2 border-black p-4 text-grey-darkest max-w-sm";
    } else if (validateFunction) {
      return "border-8 border-green-500 p-4 text-grey-darkest max-w-sm";
    } else return "border-8 border-red-500 p-4 text-grey-darkest max-w-sm";
  };

  const progressContainerCSS = () => {
    return validateComponent()
      ? "bg-green-300 w-1/6 text-center border-2 border-black border-double p-4"
      : "bg-yellow-300 w-1/6 text-center border-2 border-black border-double p-4";
  };

  return (
    <div className="flex flex-col border-2 border-dashed border-black p-4">
      <div className="flex flex-cols-2 items-center">
        <h1 className="w-5/6 text-4xl py-4">
          What are our total costs after we pay our employees?
        </h1>
        <span className={progressContainerCSS()}>
          {validateComponent() === true ? "Correct!" : "Incorrect"}
        </span>
      </div>
      <h1 className="text-2xl mt-8">
        How much does it cost to employ {selectedNumWorkers}{" "}
        {Number.parseInt(selectedNumWorkers) === 1 ? "worker" : "workers"}
      </h1>
      <h1 className="text-2xl font-bold p-4">Equation 1:</h1>
      <div className="grid grid-cols-7 items-center justify-center py-4">
        <p className="text-2xl text-center">Num Workers</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center">Hourly Wage</p>
        <p className="text-4xl text-center">x</p>
        <p className="text-2xl text-center">Hours Operating per Day</p>
        <p className="text-4xl text-center">=</p>
        <p className="text-2xl text-center">Total Wages per Day</p>
        <p></p>
        <p></p>
      </div>
      <div className="grid grid-cols-7 items-center justify-center pt-8">
        <input
          className={equationContainerCSS(
            laborCostEquationOneBoxOne,
            validateLaborCostEquationOneBoxOne().isCorrect
          )}
          value={laborCostEquationOneBoxOne}
          onChange={(e) => {
            setLaborCostEquationOneBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            laborCostEquationOneBoxTwo,
            validateLaborCostEquationOneBoxTwo().isCorrect
          )}
          value={laborCostEquationOneBoxTwo}
          onChange={(e) => setLaborCostEquationOneBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">x</p>
        <input
          className={equationContainerCSS(
            laborCostEquationOneBoxThree,
            validateLaborCostEquationOneBoxThree().isCorrect
          )}
          value={laborCostEquationOneBoxThree}
          onChange={(e) => setLaborCostEquationOneBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            laborCostEquationOneBoxFour,
            validateLaborCostEquationOneAnswer().isCorrect
          )}
          value={laborCostEquationOneBoxFour}
          onChange={(e) => setLaborCostEquationOneBoxFour(e.target.value)}
          placeholder="2"
        />
      </div>
      <h1 className="text-2xl mt-12">What are our total costs each day?</h1>
      <h1 className="text-2xl font-bold pt-8 pl-4">Equation 2:</h1>
      <div className="grid grid-cols-7 items-center justify-center pt-4">
        <p className="text-2xl text-center m-4">Daily Ingredient Cost</p>
        <p className="text-4xl text-center m-4">+</p>
        <p className="text-2xl text-center m-4">Daily Truck Cost</p>
        <p className="text-4xl text-center m-4">+</p>
        <p className="text-2xl text-center m-4">Wages Per Day</p>
        <p className="text-4xl text-center m-4">=</p>
        <p className="text-2xl text-center m-4">Total Costs Per Day</p>
        <input
          className={equationContainerCSS(
            laborCostEquationTwoBoxOne,
            validateLaborCostEquationTwoBoxOne().isCorrect
          )}
          value={laborCostEquationTwoBoxOne}
          onChange={(e) => {
            setLaborCostEquationTwoBoxOne(e.target.value);
          }}
          placeholder="1"
        />

        <p className="text-4xl text-center">+</p>
        <input
          className={equationContainerCSS(
            laborCostEquationTwoBoxTwo,
            validateLaborCostEquationTwoBoxTwo().isCorrect
          )}
          value={laborCostEquationTwoBoxTwo}
          onChange={(e) => setLaborCostEquationTwoBoxTwo(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">+</p>
        <input
          className={equationContainerCSS(
            laborCostEquationTwoBoxThree,
            validateLaborCostEquationTwoBoxThree().isCorrect
          )}
          value={laborCostEquationTwoBoxThree}
          onChange={(e) => setLaborCostEquationTwoBoxThree(e.target.value)}
          placeholder="2"
        />
        <p className="text-4xl text-center">=</p>
        <input
          className={equationContainerCSS(
            laborCostEquationTwoBoxFour,
            validateLaborCostEquationTwoAnswer().isCorrect
          )}
          value={laborCostEquationTwoBoxFour}
          onChange={(e) => setLaborCostEquationTwoBoxFour(e.target.value)}
          placeholder="2"
        />
      </div>
    </div>
  );
};

export default LaborCostEquation;
