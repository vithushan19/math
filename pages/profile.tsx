import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  FetchUserProfileMetadataResponse,
  FETCH_USER_PROFILE_METADATA,
  UserProfileMetadata,
} from "../graphql/fetchUserProfile";
import { useAuth } from "../lib/authContext";

// query to add User's name, username, email, created at date (joined), profile picture, achievements / badges?? prob existing quiz

export default function Profile(props) {
  const { user } = useAuth();

  const { loading, error, data } = useQuery<FetchUserProfileMetadataResponse>(
    FETCH_USER_PROFILE_METADATA,
    {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        console.log("oncomplete useQuery", JSON.stringify(data.users[0]));
        setUserProfileMetadata({
          __typename: data.users[0].__typename,
          created_at: data.users[0].created_at,
          email: data.users[0].email,
          last_seen: data.users[0].last_seen,
          name: data.users[0].name,
          profile_image: data.users[0].profile_image,
        });
      },
    }
  );

  const [userProfileMetadata, setUserProfileMetadata] =
    useState<UserProfileMetadata>(Object);

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div className="flex items-center justify-between">
        {userProfileMetadata && (
          <h1 className="text-3xl font-bold">{userProfileMetadata.name}</h1>
        )}
        <div className="w-32 text-center sm:justify-end px-2 py-1 text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer hover:bg-gray-50 hover:border-charmander hover:text-charmander dark:hover:bg-gray-800">
          Edit
        </div>
      </div>
      {userProfileMetadata && (
        <div className="grid grid-cols-1 sm:grid-cols-8 mt-12">
          <img
            className="w-32 rounded-full"
            src={userProfileMetadata.profile_image}
          />
          <div className="col-span-2 mt-2">
            <p className="text-lg font-bold"></p>
            <p className="text-base text-gray-400">
              {userProfileMetadata.name}
            </p>
            <p className="text-base text-gray-400">
              {userProfileMetadata.email}
            </p>
            <div className="mt-4">
              <img
                className="inline"
                src="/images/profile/clock-solid-1.svg"
              ></img>
              <span className="text-base ml-2">
                Joined {userProfileMetadata.created_at}
              </span>
            </div>
          </div>
        </div>
      )}

      <h2 className="mt-14 mb-9 font-bold text-lg">Goals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 mb-16">
        <div className="text-white bg-murkrow text-center rounded-full mx-5 py-2 mb-5">
          Get A Tech Job
        </div>
        <div className="text-white bg-murkrow text-center rounded-full mx-5 py-2 mb-5">
          Learn A New Skill
        </div>
      </div>
      <h2 className="font-bold text-lg mb-9">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 1 - HTML
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">HTML</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 2 - CSS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">CSS</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6">
        <div className="text-gray-400 bg-gray-200 rounded-full text-center py-4">
          Level 3 - JS
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 mb-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Lesson</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Quiz</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-36 rounded-full bg-gray-200 flex items-center justify-center p-8 mb-7">
            <img
              className="w-28"
              src="/images/profile/achievement-badge.svg"
            ></img>
          </div>
          <p className="text-base">JS</p>
          <p className="text-base mb-8 sm:mb-0">Assignment</p>
        </div>
      </div>
    </div>
  );
}
