import React from "react";
import { Button } from "../ui/Button";

const Q2 = (displayQuestion, nextQuestion) => {
  return (
    <React.Fragment>
      <p className="text-2xl text-center">{displayQuestion}</p>
      <div className="text-center">
        <label>Final Answer</label>
        <input className="p-4 text-lg" placeholder="Any degree" />
      </div>
      <div className="flex flex-col items-center">
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={nextQuestion}
        />
      </div>
    </React.Fragment>
  );
};

export default Q2;
