import React, { useState } from "react";
import { itemContainerObj, noun } from "../../pages/api/WordProblemModel";
import { Button } from "./Button";
import { Input } from "./Input";

export interface WordProblemSubProp {
  submitGuess: (e) => void;
  question: string;
  name: string;
  itemContainer?: itemContainerObj;
  noun1: noun;
}

/**
 * Primary UI component for user interaction
 */
export const WordProblemSub: React.FC<WordProblemSubProp> = ({
  submitGuess,
  question,
  name,
  itemContainer,
  noun1,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };
  const parse = () => {
    const parts = question.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  const title = (noun, number) => {
    if (number == "1") {
      return noun.singleTitle;
    }
    return noun.pluralTitle;
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl flex flex-wrap">
        <p className="align-left">
          {name} has a {itemContainer} of {noun1.type}. Inside, there are
          <span> </span>
          <span className="border-2 border-black border-opacity-75 md:border-opacity-50 text-black font-extrabold">
            {parse().first}
          </span>
          <span> </span>
          {noun1.type}. {name} takes out
          <span className={noun1.colour}>{" " + parse().second + " "}</span>
          {title(noun1, parse().second)}. How many {noun1.type} are in the{" "}
          {itemContainer}?
        </p>
      </div>
      <div className="text-2xl flex flex-wrap">
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
      <div className="flex flex-wrap mt-2">
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
        <img src={noun1.image} width="60px" height="85px" />
      </div>
      <Button
        onClick={submitGuess}
        label="Submit"
        backgroundColor="blue"
        textColor="white"
      />
    </div>
  );
};
