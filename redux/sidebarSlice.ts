import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type SidebarProps = {};

export type SidebarPage =
  | "dashboard"
  | "coaches"
  | "goals"
  | "workshops"
  | "profile"
  | "goals"
  | "labs";

export interface SidebarState {
  activePage: SidebarPage;
  goalApproaching: boolean;
}

const initialState: SidebarState = {
  activePage: "dashboard",
  goalApproaching: false,
};

export const sidebarSlice: Slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (
      state: SidebarState,
      action: PayloadAction<SidebarPage>
    ) => {
      if (action.type == "sidebar/setActivePage") {
        state.activePage = action.payload;
      }
    },

    setIsGoalApproaching: (state, action: PayloadAction<boolean>) => {
      if (action.type == "sidebar/isGoalApproaching") {
        state.goalApproaching = action.payload;
      }
    },

  },
});

export const { setActivePage, setIsGoalApproaching } = sidebarSlice.actions;

export const activePageSelector = (state: RootState) => state.sidebarState;
