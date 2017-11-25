import { FIND_CURRENT_PLAYER } from '../actions/currentplayer.js'
import { INITIAL_STATE } from "../../src/core";


export default function findCurrentPlayer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FIND_CURRENT_PLAYER':
      return action.players[0]
    default:
      return state
  }
}
