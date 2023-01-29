import Link from "next/link";
import { useSelector } from "react-redux";
import { CodingBadge } from "../../../graphql/fetchUserProfileCard";
import BadgesDisplayedComponent from "../profileV2/BadgesDisplayedComponent";
import JoinedDateComponent from "../profileV2/JoinedDateComponent";
import React from "react";
import { profileSelector } from "../../../redux/profileSlice";
import { format } from "date-fns";

type ProfileDetailCard = {
  avatar: string;
  name: string;
  link: string;
  joinDate: string;
  badges: number;
  currentBadge: CodingBadge;
  totalBadgeCount: number;
  nextGoal: string;
};

function ProfileDetailCard({
  avatar,
  name,
  joinDate,
  badges,
  currentBadge,
  totalBadgeCount,
  nextGoal,
}: ProfileDetailCard) {
  return (
    <div className="grid grid-cols-8 h-full text-sm border-2 bg-slate-50 text-slate-800 border-slate-800 hover:bg-violet-100">
      <div className="flex ml-3 place-items-center col-span-8 mt-4">
        <img
          className=" w-20 my-3 border-3 rounded-full border-slate-800 "
          src={avatar}
        />
        <div className=" items-start gap-1 mx-4 mb-4">
          <p className="font-bold mb-1"> {name}</p>

          <JoinedDateComponent
            user={name}
            textSize={"small"}
            createdAt={joinDate}
          />
          <BadgesDisplayedComponent
            earnedBadges={badges}
            textSize={"small"}
            totalBadges={totalBadgeCount}
          />
        </div>
      </div>
      <div className="ml-8 col-span-6 mb-2">
        <p className="font-bold">Current Focus:</p>
        <div className="flex items-center p-2 ">
          <img src={currentBadge?.image} className="w-16 mr-4 rounded-full" />
          <p className="underline "> {currentBadge?.title}</p>
        </div>
        <p className="font-bold">Next Goal:</p>
        <div className="flex items-center p-2 ">
          <div className="w-16 mr-4 rounded-full">{nextGoal}</div>
          <p className="underline "> {goalTargetDate}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailCard;
