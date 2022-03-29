import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { bakersRackBSlice, BakersRackBState } from "./bakerBSlice";
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice";
import { warGameSlice, WarGameState } from "./warGameSlice";
import {
  practiceTrackerSlice,
  PracticeTrackerState,
} from "./studentProfileSlice";
import {
  assignmentSessionSlice,
  assignmentSessionState,
} from "./assignmentSession";
import {
  evaluateExpressionSlice,
  EvaluateExpressionState,
} from "./evaluateExpressionSlice";
import { quizSlice, QuizState } from "./quizSlice";

type State = {
  diagnostic: DiagnosticState;
  practiceTracker: PracticeTrackerState;
  bakersRackB: BakersRackBState;
  assignmentSession: assignmentSessionState;
  warGame: WarGameState;
  evaluateExpressionHistory: EvaluateExpressionState[];
  quizState: QuizState;
};
const diagnosticReducer: Reducer = diagnosticSlice.reducer;
const practiceTrackerReducer = practiceTrackerSlice.reducer;
const bakersRackBReducer = bakersRackBSlice.reducer;
const assignmentSessionReducer = assignmentSessionSlice.reducer;
const warGameReducer = warGameSlice.reducer;
const evaluateExpressionReducer = evaluateExpressionSlice.reducer;
const quizReducer = quizSlice.reducer;

const rootReducer = combineReducers({
  diagnostic: diagnosticReducer,
  practiceTracker: practiceTrackerReducer,
  bakersBRack: bakersRackBReducer,
  assignmentSession: assignmentSessionReducer,
  warGame: warGameReducer,
  evaluateExpressionHistory: evaluateExpressionReducer,
  quizState: quizReducer,
});

export type RootState = State;

export default rootReducer;
