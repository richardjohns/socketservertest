import {NEXT_VIDEO} from '../actions/videoChanger.js'
import { INITIAL_STATE } from "../../src/core";

// export default function videoChanger (state = [], action) {

export default function videoChanger(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEXT_VIDEO:
      action.remainingVideos.filter(remainingVid => remainingVid.vid_url !== action.currentvid.vid_url);
    default:
      return state;
  }
}
