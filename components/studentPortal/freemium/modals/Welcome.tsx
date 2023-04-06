import React from "react";
export default function Welcome() {
  return (
    <div className="md:space-y-10 space-y-2">
      <h1 className="md:text-3xl text-sm font-bold text-center">
        Welcome to Skillify Coding Academy!
      </h1>
      <div className="flex flex-col md:flex-row overflow-y-auto h-80 md:h-full items-center">
        <div className="flex flex-col space-y-2 md:space-y-8 text-sm md:text-base bg-[#E2E3FB] p-6 rounded-lg">
          <p>
            Your free trial includes access to lessons, quizzes, and assignments
            from our beginner and advanced coding courses.
          </p>
          <p>
            <span className="font-bold">BONUS:</span> Submit one intro
            assignment and get personalized feedback from one of our coaches.
          </p>
        </div>
        <img
          className="w-[475px]"
          src="/images/freemium/welcomeModal.svg"
        ></img>
      </div>
    </div>
  );
}
