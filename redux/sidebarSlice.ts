import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type SidebarProps = {};

export type SidebarPage =
  | "dashboard"
  | "classroom"
  | "profile"
  | "labs"
  | "goals";

export interface SidebarState {
  activePage: SidebarPage;
}

const initialState: SidebarState = {
  activePage: "goals",
};

export const sidebarSlice: Slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActivePage: (
      state: SidebarState,
      action: PayloadAction<SidebarPage>
    ) => {
      if (action.type == "sidebar/setActivePageDos") {
        state.activePage = action.payload;
      }
    },
  },
});

export const { setActivePage } = sidebarSlice.actions;

export const activePageSelector = (state: RootState) => state.sidebarState;
