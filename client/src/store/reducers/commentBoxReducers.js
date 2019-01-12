import {
  ONUPDATECOMMENT,
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
  fetchingComments: false,
  addingComments: false,
  updatingComments: false,
  deletingComments: false,
  error: null,
  updatedId: null
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
      console.log(state.data);
      return {
        ...state,
        error: null
      };
    case POSTING_COMMENTS_FAIL:
      return { ...state, error: action.payload, addingComments: false };

    // deleting commentes
    case DELETING_COMMENTS:
      return { ...state, deletingComments: true };
    case DELETING_COMMENTS_SUCCESS:
      return { ...state, data: action.payload };
    case DELETING_COMMENTS_FAIL:
      return { ...state, error: action.payload };

    // update comments
    case ONUPDATECOMMENT:
      return {
        ...state,
        text: action.payload.text,
        updatedId: action.payload.updatedId
      };
    case UPDATE_COMMENTS_SUCCESS:
      return {
        ...state,
        error: null
      };
    case UPDATE_COMMENTS_FAIL:
      return { ...state, error: action.payload, updatingComments: false };
    default:
      return state;
  }
}
