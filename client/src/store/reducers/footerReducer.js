import { TOGGLE_COMMENT, TOGGLE_HEART } from "../actions/types";

const initialState = {
  isLiked: false,
  likes: 10,
  isComment: false
};

export default function reducerName(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMMENT:
      return {
        ...state
      };
    case TOGGLE_HEART:
      return {
        ...state
      };
    default:
      return state;
  }
}
