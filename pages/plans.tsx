export const plansCardData = [
  {
    title: "Free 14-day Trial",
    description: "No credit card required",
    price: "$0",
    buttonLabel: "Sign Up",
    onClick: "/sign-up",
    planRowData: [
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "First Description",
      },
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "Second Description",
      },
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "Third Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description: "Fourth Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description: "Fifth Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description:
          "Sixth Description what happens if this is really long to do",
      },
    ],
  },
  {
    title: "Premium",
    description: "Contact us for pricing",
    price: "Custom",
    buttonLabel: "Book a Call",
    onClick: "https://joinskillify.com/call",
    planRowData: [
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "FirstA Description",
      },
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "SecondA Description",
      },
      {
        icon: "../../images/freemium/greenCheck.svg",
        description: "ThirdA Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description: "FourthA Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description: "FifthA Description",
      },
      {
        icon: "../../images/freemium/redX.svg",
        description:
          "SixthA Description what happens if this is really long to do",
      },
    ],
  },
];

import router from "next/router";
import React, { useState } from "react";
import PlansCard from "../components/studentPortal/freemium/PlansCard";
import SignInPage from "../components/welcomePage/SignInPage";

const Plans = ({ plansData }) => {
  const [showSignInPage, setShowSignInPage] = useState(false);

  const handlePremium = () => {
    router.push(plansData[1].onClick);
  };

  const handleTrial = () => {
    setShowSignInPage(true);
  };

  return (
    <div>
      {showSignInPage ? (
        <SignInPage />
      ) : (
        <div>
          <div className="flex flex-col mt-24 items-center justify-center space-y-10 mb-12">
            <h1 className=" text-charmander text-3xl font-bold text-center p-4">
              Pick the Plan That's Right For You
            </h1>
            <p>Reserve your spot today!</p>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-10 space-x-0 items-center justify-center">
            {plansData.map((card) => (
              <PlansCard
                key={card.title}
                title={card.title}
                description={card.description}
                price={card.price}
                buttonLabel={card.buttonLabel}
                onClick={
                  card.onClick === "/sign-up" ? handleTrial : handlePremium
                }
                planRowData={card.planRowData}
              ></PlansCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      plansData: plansCardData,
    },
  };
}

export default Plans;
