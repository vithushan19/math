import { ReactNode } from "react";

export interface TrueFalseProps {
  option1: string; // Yes, True or Optional
  option2: string; // No, False or Optional
  name: string;
  value: boolean;
  onChange: (e: any) => void;
}

export const TrueFalse = ({
  option1,
  option2,
  name,
  onChange,
}: TrueFalseProps) => {
  return (
    <div>
      {/*Q1 Radio */}
      <div className={"flex flex-nowrap gap-x-2 "}>
        <div className={"flex gap-x-2 "}>
          <div>
            <label>
              <input
                type="radio"
                value={option1}
                className={"gap-x-2"}
                name={name}
                onChange={onChange}
              />
              {option1}
            </label>
          </div>
          <div className={""}>
            <label>
              <input
                type="radio"
                value={option2}
                className={"gap-x-2"}
                name={name}
                onChange={onChange}
              />
              {option2}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
