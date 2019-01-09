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
        ...state,
        isComment: !state.isComment
      };
    case TOGGLE_HEART:
      return {
        ...state,
        isLiked: !state.isLiked,
        likes: !state.isLiked ? (state.likes += 1) : (state.likes -= 1)
      };
    default:
      return state;
  }
}
