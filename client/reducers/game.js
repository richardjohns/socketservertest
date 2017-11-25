import {END_ROUND, RESET_GAME} from '../actions/round.js'
import { INITIAL_STATE } from "../../src/core";

// export default function game (state = [], action) {
export default function game(state = INITIAL_STATE, action) {
  switch (action.type) {
    case END_ROUND:
      return [...state, action.round];
    case RESET_GAME:
      return [];
    default:
      return state;
  }
}