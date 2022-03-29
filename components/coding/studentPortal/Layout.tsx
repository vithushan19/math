import React, { useState } from "react";
import Navbar from "../../ui/Navbar";
import Sidebar from "./Sidebar";

export const Layout: React.FC = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col h-full bg-red-300">
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div className="z-20 flex justify-between w-full h-16 col-span-12 p-4 bg-white ">
        <div onClick={(e) => setActive(!active)}>
          <div className="cursor-pointer md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <img className="w-48 h-8" src="/images/logo.svg" />
        <div />
      </div>
      <div className="flex h-full">
        <div className="hidden w-64 h-full col-span-2 bg-white md:flex dark:bg-gray-900">
          <Sidebar />
        </div>
        <div
          className={`dark:text-white w-full h-full transition-all transform duration-500 ease-in-out grid grid-cols-1 gap-4 bg-gray-100 dark:bg-gray-800 ${
            active ? "" : ""
          } `}
        >
          <div>{children}</div>
        </div>
      </div>
      <div
        className={`absolute z-10 lg:hidden w-48 top-16 ${
          active ? "left-0" : "-left-48"
        } h-full bg-white dark:bg-gray-900 lg:w-0 transition-all transform duration-500 ease-in-out`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
