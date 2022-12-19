import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Action } from "lottie-react";
import SkillCard from "../components/math/stories/SkillCard";
import { Users } from "../graphql/fetchUserProfileCard";
import { RootState } from "./rootReducer";

export type SkillifyUsersState = {
  userList: Users[];
};

const initialState: SkillifyUsersState = { userList: [] };

export const skillifyUsersSlice: Slice = createSlice({
  name: "skillifyUsers",
  initialState,
  reducers: {
    setUserList: (
      state: SkillifyUsersState,
      action: PayloadAction<Users[]>
    ) => {
      if (action.type == "skillifyUsers/setUserList") {
        return { userList: [...action.payload] };
      }
    },
  },
});

export const { setUserList } = skillifyUsersSlice.actions;
export default skillifyUsersSlice.reducer;
export const skillifyUsersSelector = (state: RootState) =>
  state.skillifyUsersState;
