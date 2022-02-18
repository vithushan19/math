import Link from "next/link";
import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import ContactForms from "../ContactForms";
import Testimonial, { TestimonialProps } from "../landing/Testimonial";
import { Button } from "../ui/Button";
import Benefits from "../landing/Benefits";
import EmailCapture from "../landing/EmailCapture";
import TestimonialSect from "../landing/TestimonialSect";
import SubscribeBanner from "../landing/SubscribeBanner";
import LandingFooter from "../landing/LandingFooter";

const LandingPagev2 = () => {
  return (
    <div>
      <div className="flex flex-col w-full bg-gray-100">
        <Benefits />
        <EmailCapture />
        <TestimonialSect />
        <SubscribeBanner />
      </div>
      <LandingFooter />
    </div>
  );
};

export default LandingPagev2;
