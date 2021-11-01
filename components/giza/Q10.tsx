import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { MultipleChoice } from "../questionTypes/MultipleChoice";

const Q10 = (displayQuestion, nextQuestion, isWrong) => {
  /*
    115 degrees
    295 degrees
    65 degrees - right answer
    15 degrees
  */
  const onSubmit = (guess: GuessData) => {
    //Pass this guessData object into nextQuestion
    if (guess.isCorrect == false) {
      isWrong(guess.isCorrect, guess);
    } else {
      nextQuestion(guess);
    }
  };
  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <div id="quizImage">
          <img
            className="animate-fadeIn"
            src="/images/giza/MathQuestionImage3.png"
          ></img>
        </div>
        <MultipleChoice
          displayQuestion={displayQuestion}
          option1={{
            id: "option1",
            text: "115 degrees",
          }}
          option2={{
            id: "option2",
            text: "65 degrees",
          }}
          option3={{
            id: "option3",
            text: "15 degrees",
          }}
          answer="65 degrees"
          submitGuess={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Q10;
