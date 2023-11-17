import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_ALL_USER_GOALS } from "../../../../graphql/studentPortal/goals/fetchAllUserGoals";
import GoalCard from "./GoalCard";

export type Goal = {
  description: string;
  userName: string;
  completedOn: string;
};

export default function GoalsFeed() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useQuery(FETCH_ALL_USER_GOALS, {
    onCompleted: (data) => {
      const transformedGoals = data.user_goals.map((goal) => {
        return {
          description: goal.goalName,
          userName: goal.usersTable.name,
          completedOn: goal.updatedAt,
        };
      });

      setGoals(transformedGoals);
    },
  });

  return (
    <div className="h-screen p-4 overflow-y-auto border-l-2 bg-backgroundPrimary">
      <h1 className="mb-4 text-2xl font-bold">Goals Feed</h1>
      {goals.map((goal) => (
        <GoalCard goal={goal} />
      ))}
    </div>
  );
}
