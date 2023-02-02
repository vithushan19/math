import React from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import ExpandableContainer from "../../../components/coding/ExpandableContainer";
import GoalsSectionComponent from "../../../components/coding/GoalsSectionComponent";
import ProfileHeaderComponent from "../../../components/coding/profileV2/ProfileHeaderComponent";
import SkillRatingsComponent from "../../../components/coding/SkillRatingsComponent";
import {
  FetchUserGoalsDataResponse,
  FETCH_USER_GOALS,
} from "../../../graphql/fetchUserGoals";
import { useAuth } from "../../../lib/authContext";
import { userGoalsSelector, setUserGoals } from "../../../redux/userGoalsSlice";
import ProjectsSection from "../../../components/coding/ProjectsSection";
import AchievementComponent from "../../../components/coding/profileV2/achievement_components/AchievementComponent";
import { useRouter } from "next/router";
import {
  FetchTotalBadgesCountResponse,
  FETCH_TOTAL_USER_BADGES_COUNT,
} from "../../../graphql/fetchTotalUserBadgesCount";
import {
  FetchUserBadgesCountResponse,
  FETCH_USER_BADGES_COUNT,
} from "../../../graphql/fetchUserBadgesCount";
import {
  FetchUserProfileDataResponse,
  FETCH_USER_PROFILE_DATA,
} from "../../../graphql/fetchUserProfile";
import {
  profileSelector,
  setUserProfile,
  setUserBadgeCount,
  setTotalBadgeCount,
} from "../../../redux/profileSlice";

type InternalProfileProps = {
  userIdFromLink?: string;
};

export default function InternalProfile({
  userIdFromLink,
}: InternalProfileProps) {
  const { user } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  let userId;

  if (userIdFromLink) {
    userId = userIdFromLink;
  } else {
    userId = router.query.userId;
  }

  const { userGoals } = useSelector(userGoalsSelector);
  const { userProfileData, userBadgeCount, totalBadgeCount } =
    useSelector(profileSelector);

  if (userId) {
    useQuery<FetchUserProfileDataResponse>(FETCH_USER_PROFILE_DATA, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.users.length > 0) {
          dispatch(
            setUserProfile({
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

    useQuery<FetchUserGoalsDataResponse>(FETCH_USER_GOALS, {
      variables: {
        userId: userId,
      },

      onCompleted: (data: FetchUserGoalsDataResponse) => {
        dispatch(setUserGoals(data.user_goals));
      },
    });

    useQuery<FetchUserBadgesCountResponse>(FETCH_USER_BADGES_COUNT, {
      variables: {
        userId: userId,
      },
      onCompleted: (data) => {
        if (data.user_coding_badges_aggregate.aggregate.count) {
          dispatch(
            setUserBadgeCount(data.user_coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });

    useQuery<FetchTotalBadgesCountResponse>(FETCH_TOTAL_USER_BADGES_COUNT, {
      onCompleted: (data) => {
        if (data.coding_badges_aggregate) {
          dispatch(
            setTotalBadgeCount(data.coding_badges_aggregate.aggregate.count)
          );
        }
      },
    });
  }

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll space-y-4">
      <ProfileHeaderComponent
        userProfileData={userProfileData}
        userBadgeCount={userBadgeCount}
        totalBadgeCount={totalBadgeCount}
      />
      <div>
        <ExpandableContainer open={true} title={"Projects"}>
          <ProjectsSection user={user} />
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Goals"}>
          <GoalsSectionComponent
            inProfile={true}
            userGoals={userGoals
              .filter((goal) => !goal.isComplete && !goal.isArchived)
              .slice(0, 3)}
          />
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Skill Ratings"}>
          <SkillRatingsComponent />
        </ExpandableContainer>
      </div>
      <div className="grid">
        <ExpandableContainer open={true} title={"Achievements"}>
          {typeof userId == "string" && (
            <AchievementComponent userId={userId} isEditable={true} />
          )}
        </ExpandableContainer>
      </div>
    </div>
  );
}

InternalProfile.auth = true;
