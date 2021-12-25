import React from "react";
import HeroHome from "../../components/coding/landing/HeroHome";

export default function Coding(props) {
  const pages = [
    { title: "Reverse a String", link: "/coding/reverseString" },
    { title: "Evaluate an Expression", link: "/coding/evaluateExpression" },
    { title: "Validate a Word Pattern", link: "/coding/wordPattern" },
  ];

  return (
    <div className=" bg-white grid grid-cols-1">
      <div className="bg-blue-600 p-4 w-full text-center font-bold text-white">CS Champ</div>
      <div className="p-4 flex flex-col w-full space-y-4">
        <HeroHome />
        <p className="text-center font-bold text-xl">Interactive Lessons</p>
        <div className="flex space-x-8 pb-16 overflow-x-auto">

          {pages.map((page) => (
            <a href={page.link}>
              <div className="p-8 flex flex-col items-center w-64 space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
                <div className="flex w-16 h-16 p-1 bg-purple-100 rounded-full ring-2 ring-blue-300 heropattern-jupiter-yellow-500"></div>
                <p>{page.title}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col space-y-8 bg-blue-600 py-16">
          <p className="text-center font-bold text-xl text-white">Our Services</p>
          <div className="grid gap-4 grid-cols-2 justify-center text-center p-8 w-full items-center">
            <div className="p-8 flex flex-col w-full items-center space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
              <img className="w-16 h-16 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
              <p>React.js Developer Training</p>
            </div>
            <div className="p-8 flex flex-col items-center w-full space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
              <img className="w-16 h-16 object-contain" src="data:image/png;base64,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" />
              <p>Android Developer Training</p>
            </div>
            <div className="p-8 flex flex-col items-center w-full space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
              <img className="w-16 h-16 object-contain" src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png" />
              <p>Mock Technical Interviews</p>
            </div>
            <div className="p-8 flex flex-col items-center w-full space-y-8 transition-all transform bg-white shadow-lg cursor-pointer rounded-xl hover:scale-110">
              <img className="w-16 h-16 object-contain" src="https://tuple.app/pair-programming-guide/assets/pair-programming-illustration.svg" />
              <p>On-demand pair programming</p>
            </div>

          </div>
          <div className="flex justify-center">
            <a className="btn p-4 rounded-md w-64 text-center text-blue-800 bg-white hover:bg-gray-100 mb-4 sm:w-auto sm:mb-0" href="mailto:admin@vithushan.ca?subject=Learn to Code">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
