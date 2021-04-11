import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import { useQuery } from "@apollo/client";
import SkillCard from "./SkillCard";
import apiData from "../pages/api/data.json";
import { signIn, useSession } from "next-auth/client";
import { FETCH_USER_SKILLS } from "../graphql/fetchUserSkills";

const Outline = (props) => {
  const skillsEndRef = useRef(null);

  const userSkillsData = useQuery(FETCH_USER_SKILLS);
  let skills = [];
  let unlockedSkills = [];
  if (userSkillsData.data) {
    skills = userSkillsData.data.user_skills;
    unlockedSkills = skills.filter((it) => it.locked == false);
  }

  return (
    <div>
      <div className="col-span-2 p-8 mb-8 bg-white rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl">Math Skill Tree</p>
          <p className="bg-white ring-blue-400 text-center rounded-full ring-4 w-16 h-8">
            {Math.floor(
              (100 * unlockedSkills.length) / skills.length
            )}
            %
          </p>
        </div>
        <p className="text-sm">Practice different math-related skills</p>
      </div>

      <div className="flex flex-wrap justify-around gap-8">
        {userSkillsData.loading && <p>Loading ...</p>}
        {unlockedSkills.map((skill, index) => (
          <div key={skill.skill.title}>
            <SkillCard
              key={skill.skill.title}
              title={skill.skill.title}
              image={skill.skill.image}
              link={`/practice/${skill.skill.id}`}
              rating={skill.stars}
            />
          </div>
        ))}
      </div>
      <div className="col-span-2 my-8">
        <p className="text-xl text-center">Locked</p>
      </div>
      <div className="flex flex-wrap justify-around gap-8">
        {skills
          .filter((it) => it.locked == true)

          .map((skill, index) => (
            <div key={skill.skill.title}>
              <SkillCard
                key={skill.skill.title}
                title={skill.skill.title}
                disabled={true}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Outline;
