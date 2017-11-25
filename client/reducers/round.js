import {START_ROUND, NEXT_PLAYER} from '../actions/round.js'
import { INITIAL_STATE } from "../../src/core";

const initialState = [];

export default function round(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INIT":
      return { videosPlayed: [] };
    case START_ROUND:
      return { roundNumber: action.roundNumber, playerScores: [], videosPlayed: [...state.videosPlayed], currentPlayer: action.currentPlayer, remainingPlayers: action.remainingPlayers };
    case NEXT_PLAYER:
      return { roundNumber: action.roundNumber, playerScores: [...state.playerScores, action.playerScore], videosPlayed: [...state.videosPlayed, action.videosPlayed], currentPlayer: action.currentPlayer, remainingPlayers: action.remainingPlayers };
    default:
      return state;
  }
}
