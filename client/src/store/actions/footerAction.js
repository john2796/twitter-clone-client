import { TOGGLE_COMMENT, TOGGLE_HEART } from "./types";

export const likeTweets = param => {
  return {
    type: TOGGLE_COMMENT,
    payload: param
  };
};

export const toggleComment = param => {
  return {
    type: TOGGLE_HEART,
    payload: param
  };
};
