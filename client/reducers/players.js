import { ADD_PLAYERS } from '../actions/players.js'

// const getPlayersFromLocalStorage = () => {
//   const players = window.localStorage.getItem('players')
//   return players ? JSON.parse(players) : []
// }

const initialState = []

export default function players (state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return []
    case ADD_PLAYERS:
      return action.players
    default:
      return state
  }
}