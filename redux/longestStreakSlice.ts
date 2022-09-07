import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { STAGE } from "../pages/studentPortal/labs/multiplication/game";
import { getRandomItemFromArray, getRndInteger } from "../pages/api/random";
import { shuffle } from "lodash";

export interface LongestStreakState {
  stage: STAGE;
  blocks: GameBlockState[];
  isPlayerOneActive: boolean;
  handlePlayerSelect: number;
  isPlayerSelecting: boolean;
}

function initializeGameState(): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  for (let i = 0; i <= 20; i++) {
    let x = getRndInteger(1, 9);
    let y = getRndInteger(1, 9);
    let product: number = x * y;
    let productString: string = x + " x " + y;

    let initiateBlockState: GameBlockState = {
      text: product.toString(),
      value: product,
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);

    initiateBlockState = {
      text: productString,
      value: product,
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);
  }

  //shuffle list
  dummyArray = shuffle(dummyArray);
  return dummyArray;
}
const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  blocks: initializeGameState(),
  isPlayerOneActive: false,
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<STAGE>) => {
      const stageOfGame = action.payload as STAGE;

      state.stage = stageOfGame;
    },

    setBlocks: (
      state: LongestStreakState,
      action: PayloadAction<GameBlockState[]>
    ) => {
      const selectedBlock = action.payload as GameBlockState[];
      state.blocks = selectedBlock;
    },
    initializeGame: (state: LongestStreakState, action: PayloadAction) => {
      state.blocks = initializeGameState();
    },

    setPlayerOneActive: (state, action: PayloadAction<boolean>) => {
      if (action.type === "longestStreak/setPlayerOneActive") {
        state.isPlayerOneActive = action.payload;
      }
    },
    isPlayerSelecting: (state, action: PayloadAction<boolean>) => {
      // if (action.type === "longestStreak/isPlayerSelecting") {
      //   state.isPlayerSelecting = action.payload;
      //   for (let clickState=0; clickState<=2; clickState++) {
      //     if (clickState===1) {
      //       state.isPlayerSelecting === false;
      //     } else if (clickState===2) {
      //       state.isPlayerSelecting===false
      //       clickState--
      //     }
      //   }
      // }
    },
    //here's where to add the AI randomly selecting next block.

    handlePlayerSelect: (state, action: PayloadAction<number>) => {
      if (action.type === "longestStreak/handlePlayerSelect") {
        const index = action.payload;
        if (state.isPlayerSelecting === false) {
          // Player selected first block
          state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
          state.isPlayerSelecting = true;
        } else if (state.isPlayerSelecting === true) {
          // Player selected second block
          state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
          state.isPlayerSelecting = false;
          handleAISelection(state);
        }
      }
    },
  },
});

function handleAISelection(state: LongestStreakState) {
  const unselectedBlocks = state.blocks.filter(
    (block) => block.state === BlockState.NOT_SELECTED
  );

  let computerSelected: GameBlockState =
    getRandomItemFromArray(unselectedBlocks);
  const indexOfComputerSelected = state.blocks.indexOf(computerSelected);

  state.blocks[indexOfComputerSelected].state = BlockState.PLAYER_TWO_SELECTED;
  const valueToSearchFor = computerSelected.value;

  // TODO find a a non-selected block that has the value to search for and then select that
}

export const {
  setStage,
  setBlocks,
  isPlayerSelecting,
  setTwoPalyer,
  setPlayerOneActive,
  handlePlayerSelect,
  initializeGame,
  setlongestStreakQuestions,
} = longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) =>
  state.longestStreakState;

export default longestStreakSlice;
