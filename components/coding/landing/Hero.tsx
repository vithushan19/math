import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../ui/Button";
import Modal from "./modal/Modal";

type HeroProps = {
  headerText: HighlightableText[];
  description: string;
};

export type HighlightableText = {
  text: string;
  highlight?: boolean;
};

export default function Hero({ headerText, description }: HeroProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="">
      {isOpen && (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full h-screen p-4 bg-black-transparent">
          <Modal handleClose={(e) => setIsOpen(false)} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 h-160">
        <div className="p-8 lg:p-16 md:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {headerText.map((line) => (
              <span className={`${line.highlight ? "text-yellow-600" : ""}`}>
                {line.text}{" "}
              </span>
            ))}
          </h1>
          <p className="my-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {description}
          </p>
          <Button
            label={"Join Waitlist"}
            size="large"
            onClick={(e) => setIsOpen(true)}
          />
        </div>
        <div className="">
          <img
            className="object-cover w-full h-full md:h-160"
            src="/images/landingPage/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
