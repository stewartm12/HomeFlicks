import {RECEIVE_VIDEOS} from '../actions/video_actions';

export default (state = {}, action) => {
    
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return Object.assign({}, action.searched_videos)
    default:
      return state;
  }
};
