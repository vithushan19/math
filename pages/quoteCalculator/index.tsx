import React, { useState } from "react";
import Contact from "../../components/quoteCalculator/Contact";
import Initial from "../../components/quoteCalculator/Initial";
import QuoteScreen from "../../components/quoteCalculator/QuoteScreen";
import Selections from "../../components/quoteCalculator/Selections";

enum Stages {
  Initial,
  Contact,
  Selections,
  QuoteScreen,
}

export default function Quote() {
  const [stage, setStage] = useState<Stages>(Stages.Initial);
  const [questionId, setQuestionId] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextClick = () => {
    const nextQuestionId = questionId + 1;

    if (nextQuestionId <= 3) {
      setQuestionId(nextQuestionId);
      setStage(Stages.Selections);
    } else {
      setStage(Stages.QuoteScreen);
    }
  };

  const handleBackClick = () => {
    if (questionId === 1) {
      setStage(Stages.Contact);
    } else {
      setQuestionId((prevQuestionId) => Math.max(1, prevQuestionId - 1));
      // Pass the setName and setEmail functions to update the state
      setStage(Stages.Selections);
    }
  };

  switch (stage) {
    case Stages.Initial:
      return (
        <div>
          <Initial handleClick={() => setStage(Stages.Contact)} />
        </div>
      );
    case Stages.Contact:
      return (
        <div>
          <Contact
            handleClick={() => setStage(Stages.Selections)}
            nameProp={name}
            emailProp={email}
            setName={setName}
            setEmail={setEmail}
          />
        </div>
      );
    case Stages.Selections:
      return (
        <div>
          <Selections
            questionId={questionId}
            handleNextClick={handleNextClick}
            handleBackClick={handleBackClick}
          />
        </div>
      );
    case Stages.QuoteScreen:
      return (
        <div>
          <QuoteScreen />
        </div>
      );
    default:
      return null;
  }
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
