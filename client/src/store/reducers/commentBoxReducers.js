import {
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  LOADING_COMMENT,
  LOAD_COMMENTS
} from "../actions/types";

const initialState = {
  data: [],
  error: null,
  text: "",
  isLoading: false
};

export default function commentBoxReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state
      };
    case ADD_COMMENT:
      return {
        ...state
      };
    case DELETE_COMMENT:
      return {
        ...state
      };
    case UPDATE_COMMENT:
      return {
        ...state
      };
    case LOADING_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
