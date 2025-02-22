import React, { useState } from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";

type SelectionsProps = {
  questionId: number;
  handleNextClick: () => void;
  handleBackClick: () => void;
};

const Selections: React.FC<SelectionsProps> = ({
  questionId,
  handleNextClick,
  handleBackClick,
}) => {
  const questions = [
    {
      id: 1,
      question: "What are your learning goals?",
      options: [
        "Learn foundational programming concepts and build simple projects",
        "Further my skills in programming and build more complex projects",
        "Fully transition into a tech career",
        "Other (Please specify)",
      ],
      progress: 45,
    },
    {
      id: 2,
      question: "What is your programming ability?",
      options: [
        "No experience or have very briefly been exposed to programming",
        "Introduced to programming fundamentals and written simple programs",
        "Completed moderately complex self-guided projects",
        "Other (Please Specify)",
      ],
      progress: 80,
    },
    {
      id: 3,
      question: "How long would you like to learn with Skillify?",
      options: ["~1 month", "3-6 months", "6+ months"],
      progress: 100,
    },
  ];
  const currentQuestion = questions.find((q) => q.id === questionId);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  return (
    <div className="flex flex-col mx-auto bg-slate-50 h-screen my-auto space-y-8 items-center">
      <LandingNavbar />
      <div className=" items-center mx-40 flex flex-col space-y-4 md:w-4/5 md:space-y-12 w-2/3">
        <Progress progress={currentQuestion?.progress} />
        <div className="text-sm">{questionId + 1}/4</div>
      </div>
      <div className="mt-8 text-lg text-center font-bold">
        {currentQuestion?.question}
      </div>
      <div className="flex flex-col space-y-6 items-center mt-4 w-full max-w-lg mx-auto">
        {currentQuestion?.options?.map((option, index) => (
          <div
            key={index}
            className={`w-full space-x-4 px-4 py-2 flex items-center justify-between text-sm mt-2 border rounded-full cursor-pointer ${
              selectedOptions.includes(option)
                ? "border-charmander text-charmander"
                : "bg-white text-black-600 border-black-300"
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {selectedOptions.includes(option) ? (
              <div className="text-charmander text-2xl w-12">✓</div>
            ) : (
              <div className="text-black-600 text-2xl w-12">□</div>
            )}
            <div className="flex-grow">{option}</div>
          </div>
        ))}
      </div>
      <div className="space-x-12 mt-8">
        <Button
          label="Back"
          onClick={handleBackClick}
          backgroundColor="white"
          textColor="text-black"
        />
        <Button label="Next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Selections;
