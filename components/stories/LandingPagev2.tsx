import Link from "next/link";
import React, { useRef, useState } from "react";
import { AnswerType } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill, Topic } from "../../pages/api/skill";
import { createWordProblemModel } from "../../pages/api/WordProblemModel";
import { Button } from "./Button";
import { Input } from "./Input";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WordProblemAdd } from "./WordProblemAdd";

const LandingPagev2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col lg:flex-row bg-gray-800 shadow-lg p-8 md:p-16 gap-8">
          <div className="flex flex-col w-full lg:w-1/2 gap-8">
            <h1 className="text-5xl text-white">
              Math Champ helps parents motivate their children
            </h1>
            <h2 className="text-2xl text-white pr-4">
              Have your child take a <b>FREE</b> diagnostic to see where they
              stand
            </h2>
            <div className="flex gap-8">
              <Link href="/diagnostic">
                <button className="text-white text-xl from-blue-500 via-blue-500 to-blue-500 border-blue-900 hover:from-blue-400 bg-gradient-to-b px-8 py-4 font-bold border-b-4 rounded-xl active:border-b-2">
                  Take the first step
                </button>
              </Link>
            </div>
          </div>
          <img
            className="w-full lg:w-1/2 object-cover"
            alt="student-image"
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2"
          />
        </div>
        <div
          id="banner"
          className="bg-blue-500 heropattern-architect-blue-400 shadow-lg flex-col text-center p-8"
        >
          <p className="text-5xl text-white">
            K-12 Math Activities and Quizzes
          </p>
          <p className="text-xl text-white">
            Help your students feel more confident with numbers with content
            aligned to the Canadian curriculum
          </p>
        </div>
        <div
          id="steps-mobile"
          className="md:hidden grid grid-cols-1 md:grid-cols-3 px-8 gap-x-4 justify-between"
        >
          <div id="step1" className="bg-white rounded-lg p-8 shadow-lg">
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">Step 1: Assess your child</p>
            <p>
              During this quick assessment, your child will answer 12 questions
              from the Ontario curriculum.
            </p>
          </div>
          <div className="justify-center items-center bg-white p-8">
            <div className="">
              <Slider {...settings}>
                <div className="justify-center items-center">
                  <img src="/images/wordProblem1.png"></img>
                </div>
                <div>
                  <img src="/images/equalGroups.png"></img>
                </div>
                <div>
                  <img src="/images/multiArrays.png"></img>
                </div>
                <div>
                  <img src="/images/trueFalse.png"></img>
                </div>
              </Slider>
            </div>
          </div>
          <div
            id="step2"
            className="bg-white rounded-lg mt-8 p-8 shadow-lg"
          >
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">
              Step 2: Support your child's independence{" "}
            </p>
            <p>
              Your child can select from various modes and activities to help
              them learn, practice, and self-assess on the Ontario curriculum.
              Students can work at their own pace as they unlock new skills and
              levels.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-8">
            <div className="w-full">
              <img src="/images/step2.png" />
            </div>
          </div>
          <div id="step3" className="bg-white rounded-lg mt-8 p-8 shadow-lg">
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">
              Step 3: Get Your Personalized Reports
            </p>
            <p>
              Your customized Math Champ report will give you weekly insights
              and the supplemental resources you need for your child.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-8">
            <div className="w-full">
              <img
                src="/diagnostic/diagnostic-sample-report.gif"
                className="sm:rounded-r-lg rounded-tr-lg"
              />
            </div>
          </div>
        </div>
        <div
          id="steps-lg"
          className="md:grid hidden grid-cols-1 md:grid-cols-3 px-8 gap-x-4 justify-between"
        >
          <div id="step1" className="bg-white rounded-lg p-8 shadow-lg">
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">Step 1: Assess your child</p>
            <p>
              During this quick assessment, your child will answer 12 questions
              from the Ontario curriculum.
            </p>
          </div>
          <div
            id="step2"
            className="bg-white rounded-lg mt-8 sm:mt-0 p-8 shadow-lg"
          >
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">
              Step 2: Support your child's independence{" "}
            </p>
            <p>
              Your child can select from various modes and activities to help
              them learn, practice, and self-assess on the Ontario curriculum.
              Students can work at their own pace as they unlock new skills and
              levels.
            </p>
          </div>
          <div id="step3" className="bg-white rounded-lg p-8 shadow-lg">
            {/* <p className="font-bold"></p> */}
            <p className="font-bold text-xl">
              Step 3: Get Your Personalized Reports
            </p>
            <p>
              Your customized Math Champ report will give you weekly insights
              and the supplemental resources you need for your child.
            </p>
          </div>
          <div className="justify-center items-center bg-white p-8">
            <div className="">
              <Slider {...settings}>
                <div className="justify-center items-center">
                  <img src="/images/wordProblem1.png"></img>
                </div>
                <div>
                  <img src="/images/equalGroups.png"></img>
                </div>
                <div>
                  <img src="/images/multiArrays.png"></img>
                </div>
                <div>
                  <img src="/images/trueFalse.png"></img>
                </div>
              </Slider>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-8">
            <div className="w-full">
              <img src="/images/step2.png" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-8">
            <div className="w-full">
              <img
                src="/diagnostic/diagnostic-sample-report.gif"
                className="sm:rounded-r-lg rounded-tr-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagev2;
