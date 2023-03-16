import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/ui/Button";
import ProgressBar from "../studentPortal/quizcomponent/progressbar";
import QuizNavbar from "../studentPortal/quizcomponent/quiznavbar";
const EducationBackground = () => {
  const router = useRouter();

  return (
    <div className=" px-4 space-y-4">
      <QuizNavbar></QuizNavbar>
      <ProgressBar progress={15}></ProgressBar>
      <div className="flex flex-col items-center text-center  ">
        <h1 className="text-2xl font-semibold">
          What's your educational background?
        </h1>
        <p className="text-lg font-medium px-3 pb-4">Fill in the blanks</p>
        <div className="text-lg text-left space-y-2">
          <div>
            <h3>Institution</h3>{" "}
            <input
              type="text"
              name="institution"
              className="shadow appearance-none border border-gray-500 rounded-lg px-6"
            ></input>
          </div>
          <div>
            <h3>Degree</h3>{" "}
            <input
              type="text"
              name="degree"
              className="shadow appearance-none border border-gray-500 rounded-lg px-6"
            ></input>
          </div>
        </div>
        <div className="py-8">
          <Button
            backgroundColor="yellow"
            label="Next"
            onClick={() => router.push("/careerQuiz/industries")}
          />
        </div>
      </div>
    </div>
  );
};
EducationBackground.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default EducationBackground;
