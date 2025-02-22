import React, { useState } from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import Progress from "../resources/quizzes/shared/Progress";
import { Button } from "../ui/Button";

type ContactProps = {
  handleClick: () => void;
  nameProp?: string;
  emailProp?: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const Contact: React.FC<ContactProps> = ({
  handleClick,
  nameProp = "",
  emailProp = "",
  setName,
  setEmail,
}) => {
  const [progress] = useState(25);
  const [name, setNameLocal] = useState(nameProp);
  const [email, setEmailLocal] = useState(emailProp);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email: string) => {
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.(com|ca)$/i;
    return validEmailRegex.test(email);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameLocal(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailLocal(event.target.value);
    setEmailError(false);
  };

  const handleNextClick = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    setName(name); // Update the state in the Quote component
    setEmail(email); // Update the state in the Quote component

    handleClick();
  };

  return (
    <div className="flex flex-col mx-auto bg-slate-50 h-screen my-auto space-y-8 items-center">
      <LandingNavbar />
      <div className="w-2/3 items-center mx-40 flex flex-col space-y-4 md:w-4/5 md:space-y-12">
        <Progress progress={progress} />
        <div className="text-sm">1/4</div>
      </div>
      <div className="text-center text-xl font-bold">
        Please enter your name and email:
      </div>
      <div className="space-y-12">
        <div className="flex flex-col items-start mt-4">
          <label className="text-lg font-bold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            className={`w-80 px-2 h-12 py-1 mt-2 border ${
              nameError ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            value={name}
            onChange={handleNameChange}
          />
          {nameError && (
            <span className="text-red-500 text-sm">
              Please enter a valid name
            </span>
          )}
        </div>
        <div className="flex flex-col items-start mt-4">
          <label className="text-lg font-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email address"
            className={`w-80 h-12 px-2 py-1 mt-2 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-lg`}
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <span className="text-red-500 text-sm">
              Please enter a valid email.
            </span>
          )}
        </div>
      </div>
      <button onClick={handleNextClick} className="mt-8">
        <Button label="Next" />
      </button>
    </div>
  );
};

export default Contact;
