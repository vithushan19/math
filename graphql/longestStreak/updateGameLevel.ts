import { gql } from "@apollo/client";

export const UPDATE_GAME_LEVEL = gql`
mutation updateGameLevel($userId: String = "") {
    update_longestStreakUserData(where: {userId: {_eq: $userId}}, _inc: {currentLevel: 1}) {
      returning {
        userId
        currentLevel
      }
    }
  }
  
  
  
  `
