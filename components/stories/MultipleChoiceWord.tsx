import React from "react";
import { Button } from "./Button";
import { MCType } from "./MultipleChoiceTypes";

export interface MultipleChoiceWordProp {
  displayQuestion?: string;
  question?: string;
  submitGuess: (e) => void;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let ans;
let displayAns;
export const MultipleChoiceWord: React.FC<MultipleChoiceWordProp> = ({
  displayQuestion,
  question,
  submitGuess,
  ...props
}) => {
  const parse = () => {
    const qlen = question.length;
    let i = 0;
    while (i < qlen) {
      if (question[i] == "(") {
        ans = MCType.ASSOCIATIVE;
        break;
      } else {
        ++i;
      }
    }

    const part = question.split(" ");
    return {
      first: part[0],
      third: part[3],
    };
  };
  switch (parse().third) {
    case "0":
      ans = MCType.IDENTITY;
      break;
    default:
      ans = MCType.IDENTITY;
      break;
  }
  const MCValue = randomize(0, 3);
  switch (MCValue) {
    case 0:
      displayAns = MCType.ASSOCIATIVE;
      break;
    case 1:
      displayAns = MCType.COMMUTATIVE;
      break;
    case 2:
      displayAns = MCType.IDENTITY;
      break;
  }
  return (
    <div className="flex flex-col items-center space-y-16">
      <h1 className="text-4l underline font-bold"> {displayQuestion} </h1>
      <p className="text-4xl">{question}</p>
      <div className="flex flex-row  item-center space-x-4 ">
        <Button
          label="Associative"
          backgroundColor="red"
          onClick={submitGuess}
        ></Button>
        <Button
          label="Commutative"
          backgroundColor="blue"
          onClick={submitGuess}
        ></Button>
        <Button
          label="Identity"
          backgroundColor="yellow"
          onClick={submitGuess}
        ></Button>
      </div>
    </div>
  );
};
