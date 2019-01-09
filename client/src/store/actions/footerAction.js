import { TOGGLE_COMMENT, TOGGLE_HEART } from "./types";

export const likeTweets = () => {
  return {
    type: TOGGLE_HEART
  };
};

export const toggleComment = () => {
  return {
    type: TOGGLE_COMMENT
  };
};
