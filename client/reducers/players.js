import { ADD_PLAYERS } from '../actions/players.js'
import { INITIAL_STATE } from "../../src/core";

// const getPlayersFromLocalStorage = () => {
//   const players = window.localStorage.getItem('players')
//   return players ? JSON.parse(players) : []
// }

const initialState = []

export default function players(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INIT":
      return [];
    case ADD_PLAYERS:
      return action.players;
    default:
      return state;
  }
}