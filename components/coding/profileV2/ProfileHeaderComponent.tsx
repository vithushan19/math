import { useQuery } from "@apollo/client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TOTAL_USER_BADGES_COUNT } from "../../../graphql/fetchTotalUserBadgesCount";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../../graphql/fetchUserBadgesCount";
import {
  UserProfileData,
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
  User,
} from "../../../graphql/fetchUserProfile";
import {
  profileSelector,
  setTotalBadgeCount,
  setUserBadgeCount,
  setUserProfile,
} from "../../../redux/profileSlice";
import BadgesDisplayedComponent from "./BadgesDisplayedComponent";
import JoinedDateComponent from "./JoinedDateComponent";

export type UserProfileSectionProps = {
  user: User;
};

export default function UserProfileSection({ user }: UserProfileSectionProps) {
  const dispatch = useDispatch();
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);

  const { loading: userProfileLoading } =
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        if (data.users.length > 0) {
          dispatch(
            setUserProfile({
              typeName: data.users[0].__typename,
              createdAt: data.users[0].created_at,
              email: data.users[0].email,
              lastSeen: data.users[0].last_seen,
              name: data.users[0].name,
              profileImage: data.users[0].profile_image,
            })
          );
        }
      },
    });
  const { loading: userBadgeCountLoading } =
    useQuery<FetchUserBadgesCountResponse>(FETCH_USER_BADGES_COUNT, {
      variables: {
        userId: user.uid,
      },
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          dispatch(
            setUserBadgeCount(data.user_coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

  const { loading: totalUserBadgeCountLoading } =
    useQuery<FetchUserBadgesCountResponse>(FETCH_TOTAL_USER_BADGES_COUNT, {
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          dispatch(
            setTotalBadgeCount(
              data.user_coding_badges_aggregate.aggregate.count
            )
          );
        }
      },
    });

  return (
    <>
      {userProfileLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 col-span-5 mt-4 md:grid-cols-8">
          <img
            className="w-36 mt-6 mr-2 rounded-full"
            src={userProfileData.profileImage}
          />
          <div className="col-span-3 mt-2 ml-2">
            <h1 className="text-2xl font-bold mt-2 md:text-4xl md:mt-6">
              {userProfileData.name}
            </h1>
            <div className="flex mt-4">
              <JoinedDateComponent
                user={user}
                createdAt={userProfileData.createdAt}
                textSize={"large"}
              />
            </div>
            <BadgesDisplayedComponent
              user={user}
              earnedBadges={userBadgeCount}
              totalBadges={totalBadgeCount}
              textSize={"large"}
            />
          </div>
        </div>
      )}
    </>
  );
}
