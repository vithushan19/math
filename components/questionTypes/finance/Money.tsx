import React, { useEffect, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface MoneyProp {}

export const Money: React.FC<MoneyProp> = ({}) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const isCorrect = inputValue === "5";
  const onButtonClick = () => {
    // this will be called on every button click
    setCount(count + 1);
  };
  const onInputChange = (value) => {
    setInputValue(value);
    // this gets called when the input changes
  };

  return (
    <div className="flex flex-col space-y-8">
      <h1>How much money is there?</h1>
      <div className="flex flex-wrap w-108">
        <img src="/images/money/nickle.jpeg" className="w-16 h-16" />
        <img src="/images/money/nickle.jpeg" className="w-16 h-16" />
        <img src="/images/money/loonie.jpeg" className="w-24" />
        <img src="/images/money/loonie.jpeg" className="w-24" />
        <img src="/images/money/toonie.jpeg" className="w-28" />
        <img src="/images/money/dime.jpeg" className="w-16 h-16" />
        <img src="/images/money/dime.jpeg" className="w-16 h-16" />
      </div>
      <div className="flex flex-start">
        <p>$</p>
        <input
          type="text"
          className={`border-2 ${
            isCorrect ? "border-green-600" : "border-red-600"
          } `}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
      <div>
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={onButtonClick}
        />
      </div>
      {count > 0 && <p>You clicked {count} times</p>}
    </div>
  );
};
