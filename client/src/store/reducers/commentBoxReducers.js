import {
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
  text: ""
};

export default function commentBoxReducers(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COMMENTS:
      return { ...state, fetchingComments: true };
    case FETCHING_COMMENTS_SUCCESS:
      return { ...state, data: action.payload, fetchingComments: false };
    case FETCHING_COMMENTS_FAIL:
      return { ...state, fetchingComments: false, error: action.payload };
    // case POSTING_COMMENTS:
    //   return { ...state, addingCOMMENTS: true };
    // case POSTING_COMMENTS_SUCCESS:
    //   return { ...state, COMMENTSs: [...state.COMMENTSs, action.payload] };
    // case POSTING_COMMENTS_FAIL:
    //   return { ...state, error: action.payload };
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

// /*
//   Be sure to import in all of the action types from `../actions`
// */
// import { FETCHING_COMMENTS, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL,
//   POSTING_SMURF, POSTING_SMURF_SUCCESS, POSTING_SMURF_FAIL,
//   DELETING_SMURF, DELETING_SMURF_SUCCESS, DELETING_SMURF_FAIL,
//   CHANGING_SMURF, CHANGING_SMURF_SUCCESS, CHANGING_SMURF_FAIL } from '../actions'

// /*
// Your initial/default state for this project could *Although does not have to* look a lot like this
// */
// const initialState = {
// smurfs: [],
// fetchingSmurfs: false,
// addingSmurf: false,
// updatingSmurf: false,
// deletingSmurf: false,
// error: null,
// }

// /*
// You'll only need one smurf reducer for this project.
// Feel free to export it as a default and import as rootReducer.
// This will guard your namespacing issues.
// There is no need for 'combineReducers' in this project.
// Components can then read your store as, `state` and not `state.fooReducer`.
// */

// let smurfID = 0 // Don't have to attach to Smurfs directly
// const setID = () => {
// return ++smurfID
// }

// export default (state = initialState, action) => {
// switch(action.type) {
// case FETCHING_SMURF:
//  return {...state, fetchingSmurfs: true}
// case FETCHING_SMURF_SUCCESS:
//  setID()
//  return {...state, smurfs: action.payload, fetchingSmurfs: false}
// case FETCHING_SMURF_FAIL:
//  return {...state, fetchingSmurfs: false, error: action.payload}
// case POSTING_SMURF:
//  return {...state, addingSmurf: true}
// case POSTING_SMURF_SUCCESS:
//  return {...state, smurfs: [...state.smurfs, action.payload]}
// case POSTING_SMURF_FAIL:
//  return {...state, error: action.payload}
// case DELETING_SMURF:
//  return {...state, deletingSmurf: true}
// case DELETING_SMURF_SUCCESS:
//  return {...state, smurfs: action.payload}
// case DELETING_SMURF_FAIL:
//  return {...state, error: action.payload}
// default:
//  return state
// }
// }
