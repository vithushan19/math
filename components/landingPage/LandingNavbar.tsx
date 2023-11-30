import Link from "next/link";
import React from "react";
import { Theme } from "../../redux/themeSlice";
import CountdownTimer from "./CountdownTimer";

type LandingNavbarProps = {
  showTimer?: boolean;
  theme?: Theme;
};
export default function LandingNavbar({
  showTimer,
  theme = Theme.DEFAULT,
}: LandingNavbarProps) {
  const handleMenuIconClick = () => {
    const mobileNav = document.querySelector(".mobileNav");
    if (mobileNav.classList.contains("top-16")) {
      mobileNav.classList.remove("top-16");
      mobileNav.classList.add("-top-full");
    } else {
      mobileNav.classList.remove("-top-full");
      mobileNav.classList.add("top-16");
    }
  };
  return (
    <>
      <div
        onClick={handleMenuIconClick}
        className="absolute z-50 grid w-full h-16 grid-cols-3 p-4 bg-white "
      >
        <div className="cursor-pointer text-textPrimary md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
        </div>
        <div className="">
          {theme === Theme.DEFAULT ? (
            <img className="h-8 w-28 " src="/images/logo.svg" />
          ) : theme === Theme.DRACULA ? (
            <img className="h-8 w-28" src="/images/logo-dark.svg" />
          ) : null}
        </div>
        <div />
      </div>

      <div className="absolute z-10 w-full transition-all transform bg-white bg-backgroundSecondary mobileNav md:hidden -top-full">
        <div className="flex flex-col gap-4">
          <Link href={"/blog"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Blog</p>
            </div>
          </Link>
          <Link href={"/guide"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Guide</p>
            </div>
          </Link>
          <Link href={"/quiz"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Quiz</p>
            </div>
          </Link>
          <Link href={"/successStories"}>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
              <p>Success Stories</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 p-4">
          <div className="">
            <a
              href={"https://www.linkedin.com/in/vithushan/"}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/landingPage/linkedin.svg" className="w-8" />
            </a>{" "}
          </div>
          <div className="">
            <a
              href={"https://www.instagram.com/skillify.ca/"}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/landingPage/ig.png" className="w-8" />
            </a>{" "}
          </div>
          <div className="">
            <a
              href={"https://www.tiktok.com/@skillify.ca"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/landingPage/tiktok.png"
                className="w-8 rounded"
              />
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="hidden w-full md:flex md:flex-col">
        <div className="grid items-center justify-between w-full grid-cols-1 px-4 bg-white border-b-2 md:flex place-items-center text-murkrow">
          <Link href={"/"}>
            <img
              src="/images/logo.svg"
              className="mt-4 cursor-pointer md:mt-0 md:p-4 w-28 sm:w-40"
            />
          </Link>
          <div className="flex gap-4">
            <Link href={"/blog"}>
              <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
                <p>Blog</p>
              </div>
            </Link>
            <Link href={"/guide"}>
              <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
                <p>Guide</p>
              </div>
            </Link>
            <Link href={"/quiz"}>
              <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
                <p>Quiz</p>
              </div>
            </Link>
            <Link href={"/successStories"}>
              <div className="p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
                <p>Success Stories</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="">
              <a
                href={"https://www.linkedin.com/in/vithushan/"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/landingPage/linkedin.svg" className="w-8" />
              </a>{" "}
            </div>
            <div className="">
              <a
                href={"https://www.instagram.com/skillify.ca/"}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/landingPage/ig.png" className="w-8" />
              </a>{" "}
            </div>
            <div className="">
              <a
                href={"https://www.tiktok.com/@skillify.ca"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/landingPage/tiktok.png"
                  className="w-8 rounded"
                />
              </a>{" "}
            </div>
          </div>
        </div>
        {showTimer && <CountdownTimer />}
      </div>
    </>
  );
}
