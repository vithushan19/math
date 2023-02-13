import React from "react";
import { BenefitData } from "./Benefits";
import TestimonialSect from "./TestimonialSect";
import SubscribeBanner from "./SubscribeBanner";
import LandingFooter from "./LandingFooter";
import Credentials from "./Credentials";
import Hero, { HighlightableText } from "./Hero";
import WhatYouGet from "./WhatYouGet";
import WhoItsFor from "./WhoItsFor";
import FAQ from "./FAQ";

export type LandingPageCopy = {
  headerText: HighlightableText[];
  description: string;
  credentialsText: string;
  benefitsText: string;
  benefits: BenefitData[];
  emailCaptureText: HighlightableText[];
  emailCaptureDescription: string;
};
export default function LandingPage({
  headerText,
  description,
  credentialsText,
}: LandingPageCopy) {
  return (
    <div>
      <div className="flex flex-col items-center w-full bg-gray-100">
        <Hero headerText={headerText} description={description} />
        <WhoItsFor />
        <Credentials headerText={credentialsText} />
        <WhatYouGet />
        <TestimonialSect />
        <FAQ />
        <SubscribeBanner />
      </div>
      <LandingFooter />
    </div>
  );
}
