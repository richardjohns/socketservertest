import {RECEIVE_VIDEOS} from '../actions/videos'
import { INITIAL_STATE } from "../../src/core";

// function videos (state = [], action) {

function videos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return [...action.videos];
    default:
      return state;
  }
}

export default videos
