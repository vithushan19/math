import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

//76
const Q14 = (displayQuestion, nextQuestion) => {
  const [guessString, setGuessString] = useState<string>("");

  const answer = "76";

  const onGuessChanged = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessString(newGuess);
  };

  const onSubmit = () => {
    const guess: GuessData = {
      guess: guessString,
      isCorrect: guessString == answer,
    };
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src="/images/giza/MathQuestionImage8.png"
          ></img>
        </div>
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div className="text-center">
          <label>Final Answer</label>
          <input
            className="p-4 text-lg"
            placeholder="Any degree"
            value={guessString}
            onChange={(e) => onGuessChanged(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q14;
