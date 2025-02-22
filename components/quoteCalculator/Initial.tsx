import Head from "next/head";
import React from "react";
import LandingNavbar from "../../components/landingPage/LandingNavbar";
import Button from "../../components/quoteCalculator/Button";

type InitialProps = {
  handleClick: () => void;
};

const Initial: React.FC<InitialProps> = ({ handleClick }) => {
  return (
    <div className="bg-charmander h-full">
      <Head>
        <title>{"Quote Calculator"}</title>
        {/* Add meta tags for SEO if needed */}
      </Head>
      <LandingNavbar />
      <div className="w-full mx-auto bg-charmander text-white text-center h-screen max-w-7xl sm:p-8 flex flex-col space-y-8">
        <img
          src="/images/quoteCalculator/person-studying-online.png"
          className="py-4 md:h-1/2 md:w-1/2 self-center"
          alt="Studying Person"
        ></img>
        <h1 className="text-4xl font-bold">
          {" "}
          We're thrilled you want to learn with Skillify
        </h1>
        <p className="text-xl">
          Complete our brief questionnaire to receive a quote.
        </p>
        <button className="" onClick={handleClick}>
          <Button label="Start"></Button>
        </button>
      </div>
      <p className="bottom-0 text-white text-center">
        Due to the personalized nature of our program, please note that the
        prices generated are an estimate.
      </p>
    </div>
  );
};

export default Initial;
