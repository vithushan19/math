// QuoteScreen component
import React from "react";
import LandingNavbar from "../landingPage/LandingNavbar";
import { Button } from "../ui/Button";

const QuoteScreen = () => {
  return (
    <div className="bg-slate-50 md:space-y-28 space-y-20 h-screen flex flex-col items-center">
      <LandingNavbar />
      <div className="text-2xl font-bold text-black mt-8 mb-4">
        Estimated Cost: $5000
      </div>
      <div className="text-xl py-10 space-y-12 text-charmander mb-8">
        <div className="text-center">Ready to invest in your future? </div>
        <div className="space-x-12">
          <Button
            label=" Free Trial"
            backgroundColor="white"
            textColor="text-black"
          />
          <Button label="Book a Call" />
        </div>
      </div>
    </div>
  );
};

export default QuoteScreen;
