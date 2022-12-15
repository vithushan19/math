import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserProfileData } from "../graphql/fetchUserProfile";
import { RootState } from "./rootReducer";

export type ProfileState = {
  userProfileData: UserProfileData;
  userBadgeCount: number;
  totalBadgeCount: number;
};



const initialState: ProfileState = {
  userProfileData: {} as UserProfileData,
  userBadgeCount: 0,
  totalBadgeCount: 0,
};

export const profileSlice: Slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserProfile: (
      state: ProfileState,
      action: PayloadAction<UserProfileData>
    ) => {
      let updatedState:ProfileState;
      if (action.type == "profile/setUserProfile") {
        return {
          userProfileData: action.payload,
          userBadgeCount: state.userBadgeCount,
          totalBadgeCount: state.totalBadgeCount,
        };
      }
    },

    setUserBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type == "profile/setUserBadgeCount") {
        return {
          userProfileData: state.userProfileData,
          userBadgeCount: action.payload,
          totalBadgeCount: state.totalBadgeCount,
        };
      }
    },
  
    
    setTotalBadgeCount: (
      state: ProfileState,
      action: PayloadAction<number>
    ) => {
      if (action.type == "profile/setTotalBadgeCount") {
        return {
          userProfileData: state.userProfileData,
          userBadgeCount: state.userBadgeCount,
          totalBadgeCount: action.payload,
        };
      }
    },

  },
});

export const { setUserProfile, setUserBadgeCount, setTotalBadgeCount } =
  profileSlice.actions;

export default profileSlice.reducer;

export const profileSelector = (state: RootState) =>
  state.profileState;