import axios from "axios";
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
} from "./types";

const URL = "http://localhost:5000/api/comments/";

export const loadCommentsFromServer = () => dispatch => {
  dispatch({ type: FETCHING_COMMENTS });
  axios
    .get(URL)
    .then(({ data }) =>
      dispatch({ type: FETCHING_COMMENTS_SUCCESS, payload: data.data })
    )
    .catch(err => dispatch({ type: FETCHING_COMMENTS_FAIL, payload: err }));
};
export const onDeleteComment = (id, data) => dispatch => {
  const filteredData = data.filter(c => c._id !== id);
  dispatch({
    type: DELETING_COMMENTS_SUCCESS,
    payload: filteredData
  });
  axios
    .delete(`api/comments/${id}`)
    .then(res => console.log(res.data))
    .catch(err => dispatch({ type: DELETING_COMMENTS_FAIL, payload: err }));
};
export const submitNewComment = (text, data) => dispatch => {
  const newData = [
    ...data,
    {
      text,
      _id: Date.now().toString(),
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ];
  dispatch({
    type: POSTING_COMMENTS,
    payload: newData
  });
  axios
    .post(URL, { text })
    .then(res => dispatch({ type: POSTING_COMMENTS_SUCCESS }))
    .catch(err => dispatch({ type: POSTING_COMMENTS_FAIL, payload: err }));
};
export const onUpdateComment = (id, data) => dispatch => {
  const oldComment = data.find(c => c._id === id);
  if (!oldComment) return;
  dispatch({
    type: ONUPDATECOMMENT,
    payload: {
      text: oldComment.text,
      updatedId: id
    }
  });
};

//onSubmit
export const submitUpdatedComment = (text, updatedId) => dispatch => {
  // fetch(`/api/comments/${updatedId}`, {
  //   method: "PUT",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ text })
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     if (!res.success) dispatch({ error: res.error.message || res.error });
  //     else dispatch({ text: "", updateId: null });
  //   });

  axios
    .put(`/api/comments/${updatedId}`, { text })
    .then(res => dispatch({ type: UPDATE_COMMENTS_SUCCESS }))
    .catch(err => dispatch({ type: UPDATE_COMMENTS_FAIL, payload: err }));
};
