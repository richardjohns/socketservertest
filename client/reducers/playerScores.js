import {SCORE_EACH_ROUND} from '../actions/playerScores'
import {RESET_GAME} from '../actions/round'
import { INITIAL_STATE } from "../../src/core";

// export default function playerScores (state = [], action) {

export default function playerScores (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCORE_EACH_ROUND:
      return [...state, action.playerScores]
    case RESET_GAME:
      return []
    default:
      return state
  }
}
