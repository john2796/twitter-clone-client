import {
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  LOADING_COMMENT,
  GET_ITEMS
} from "../actions/types";

const initialState = {
  data: [],
  error: null,
  text: "",
  isLoading: false
};

export default function commentBoxReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      console.log(state.isLoading);
      return {
        ...state,
        data: action.payload.data,
        isLoading: action.payload.loading
      };
    // case ADD_COMMENT:
    //   return {
    //     ...state
    //   };
    // case DELETE_COMMENT:
    //   return {
    //     ...state
    //   };
    // case UPDATE_COMMENT:
    //   return {
    //     ...state
    //   };
    case LOADING_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
