import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { name } from "../../pages/api/names";
import { fruitsMap } from "../../pages/api/WordProblemModelObjects";

export interface UnitPriceQuestionProps {
  total: number;
  numberOfObjects: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  name: string;
}

const nameSelector = () => {
  const random = Math.floor(Math.random() * name.length);
  return name[random];
};

const UnitPriceQuestion: React.FC<UnitPriceQuestionProps> = ({
  total,
  numberOfObjects,
  submitGuess,
  answer,
  ...props
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: Number.parseInt(guess) == Math.floor(total / numberOfObjects),
    });
  };

  /** Reference user input and store it in a state, then clear input values by next question */
  const [guess, setGuess] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 py-4 overflow-y-hidden max-h-96">
        <p>
          Find the unit price of the item by rounding to the nearest integer.{" "}
          <span className="italic">after</span> calculating.
        </p>
        {""}
        <p className="pl-10">
          {nameSelector(name)} has {""}
          <span className="font-bold">{total}</span> {fruitsMap.type}, and they
          cost {""}
          <span className="font-bold">
            {""}${numberOfObjects}
          </span>
        </p>
        {""}
        <div>
          <p className="mb-4">The unit price of each object is approximately</p>
          <p className="mb-4">
            $
            <input
              id="input"
              type="number"
              value={guess}
              className="w-20 font-bold text-right border-2 border-gray-300"
              onChange={(e) => setGuess(e.target.value)}
            ></input>
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          <img src={fruitsMap.image} className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Submit"
          onClick={() => onSubmit(guess)}
        />
      </div>
    </div>
  );
};

export default UnitPriceQuestion;
