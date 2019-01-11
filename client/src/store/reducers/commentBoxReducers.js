import {
  TEXT_INPUT,
  FETCHING_COMMENTS,
  FETCHING_COMMENTS_SUCCESS,
  FETCHING_COMMENTS_FAIL,
  POSTING_COMMENTS,
  POSTING_COMMENTS_FAIL,
  POSTING_COMMENTS_SUCCESS,
  UPDATE_COMMENTS,
  UPDATE_COMMENTS_FAIL,
  UPDATE_COMMENTS_SUCCESS,
  DELETING_COMMENTS,
  DELETING_COMMENTS_FAIL,
  DELETING_COMMENTS_SUCCESS
} from "../actions/types";

const initialState = {
  data: [],
  text: "",
  fetchingComments: false,
  addingComments: false,
  updatingComments: false,
  deletingComments: false,
  error: null
};

export default function commentBoxReducers(state = initialState, action) {
  switch (action.type) {
    //Getting comments
    case FETCHING_COMMENTS:
      return { ...state, fetchingComments: true };
    case FETCHING_COMMENTS_SUCCESS:
      return { ...state, data: action.payload, fetchingComments: false };
    case FETCHING_COMMENTS_FAIL:
      return { ...state, fetchingComments: false, error: action.payload };

    //Posting comments
    case POSTING_COMMENTS:
      return {
        ...state,
        addingComments: true,
        data: action.payload
      };
    case POSTING_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null
      };
    case POSTING_COMMENTS_FAIL:
      return { ...state, error: action.payload, addingComments: false };

    // case DELETING_COMMENTS:
    //   return { ...state, deletingCOMMENTS: true };
    // case DELETING_COMMENTS_SUCCESS:
    //   return { ...state, COMMENTSs: action.payload };
    // case DELETING_COMMENTS_FAIL:
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
}
