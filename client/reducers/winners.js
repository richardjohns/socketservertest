import {RECEIVE_WINNERS} from '../actions/winners'
import { INITIAL_STATE } from "../../src/core";

// function winners (state = [], action) {

function winners(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_WINNERS:
      return [...action.winners];
    default:
      return state;
  }
}

export default winners