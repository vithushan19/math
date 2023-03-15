import React from "react";
import { Button } from "../../ui/Button";
import NodeIcon from "../../ui/NodeIcon";

export type UnitNodeViewProps = {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  hiddenLine: boolean;
  type: "lesson" | "quiz" | "assignment";
};

export const UnitNodeView: React.FC<UnitNodeViewProps> = ({
  completed,
  locked,
  hiddenLine,
  title,
  description,
  type,
}: UnitNodeViewProps) => {
  const active = !completed && !locked;

  return (
    <div className="">
      <div
        className={`${
          locked
            ? ""
            : "hover:bg-backgroundSecondary hover:shadow-lg hover:py-4 transform transition-all"
        } ${
          active
            ? "sm:px-0 py-4 border-2 flex flex-col sm:grid sm:grid-cols-12 bg-backgroundPrimary"
            : "grid grid-cols-12"
        }  `}
      >
        <div className="flex flex-col md:items-center items-start ml-4 col-span-2">
          <div className="flex rounded-full">
            {<NodeIcon completed={completed} locked={locked} type={type} />}{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full col-span-10 ml-4 sm:ml-0 sm:col-span-6">
          <p className="">{title}</p>
          <p className="">{description}</p>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          } flex flex-col col-span-4 justify-center sm:mr-4`}
        >
          <Button label="Continue" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className={`${
            hiddenLine ? "hidden" : ""
          } flex flex-col items-center col-span-2 w-full`}
        >
          <div
            className={`h-16 w-1 ml-4 ${
              completed ? "bg-bulbasaur-500" : "bg-gray-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitNodeView;
