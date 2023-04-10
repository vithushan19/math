import router from "next/router";
import React, { ReactNode, useState } from "react";
import PlansCard, {
  PlansCardProps,
} from "../../../components/studentPortal/freemium/PlansCard";
import SignInPage from "../../../components/welcomePage/SignInPage";

export interface PlansProps {
  children: ReactNode;
}

const Plans = ({ children }: PlansProps) => {
  const [showSignInPage, setShowSignInPage] = useState(false);

  const handlePremium = () => {
    router.push("https://www.joinskillify.com/call");
  };

  const handleTrial = () => {
    setShowSignInPage(true);
  };

  const plansCardData: PlansCardProps[] = [
    {
      title: "Free 14-day Trial",
      description: "No credit card required",
      price: "$0",
      buttonLabel: "Sign Up",
      onClick: handleTrial,
    },
    {
      title: "Premium",
      description: "Contact us for pricing",
      price: "Custom",
      buttonLabel: "Book a Call",
      onClick: handlePremium,
    },
  ];

  return (
    <div>
      {showSignInPage ? (
        <SignInPage />
      ) : (
        <div>
          <div className="flex flex-col mt-24 items-center justify-center space-y-10 mb-12">
            <h1 className="text-charmander text-3xl font-bold">
              Pick the Plan That's Right For You
            </h1>
            <p>Reserve your spot today!</p>
          </div>
          <div className="flex flex-row space-x-10 justify-center">
            {plansCardData.map((card) => (
              <PlansCard
                key={card.title}
                title={card.title}
                description={card.description}
                price={card.price}
                buttonLabel={card.buttonLabel}
                onClick={card.onClick}
              ></PlansCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
