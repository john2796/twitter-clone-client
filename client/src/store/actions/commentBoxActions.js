import axios from "axios";
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
} from "./types";

const URL = "http://localhost:5000/api/comments";

export const loadCommentsFromServer = () => dispatch => {
  dispatch({ type: FETCHING_COMMENTS });
  axios
    .get(URL)
    .then(({ data }) =>
      dispatch({ type: FETCHING_COMMENTS_SUCCESS, payload: data.data })
    )
    .catch(err => dispatch({ type: FETCHING_COMMENTS_FAIL, payload: err }));
};

// onUpdateComment = id => {
//   const oldComment = this.state.data.find(c => c._id === id);
//   if (!oldComment) return;
//   this.setState({
//     text: oldComment.text,
//     updateId: id
//   });
// };

// onDeleteComment = id => {
//   const i = this.state.data.findIndex(c => c._id === id);
//   const data = [
//     ...this.state.data.slice(0, i),
//     ...this.state.data.slice(i + 1)
//   ];
//   this.setState({ data });
//   fetch(`api/comments/${id}`, { method: "DELETE" })
//     .then(res => res.json())
//     .then(res => {
//       if (!res.success) this.setState({ error: res.error });
//     });
// };

// //onSubmit
// submitNewComment = () => {
//   const { text } = this.state;
//   const data = [
//     ...this.state.data,
//     {
//       text,
//       _id: Date.now().toString(),
//       updatedAt: new Date(),
//       createdAt: new Date()
//     }
//   ];
//   this.setState({ data });
//   fetch("/api/comments", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text })
//   })
//     .then(res => res.json())
//     .then(res => {
//       if (!res.success)
//         this.setState({ error: res.error.message || res.error });
//       else this.setState({ text: "", error: null });
//     });
// };

// //onSubmit
// submitUpdatedComment = () => {
//   const { text, updateId } = this.state;
//   fetch(`/api/comments/${updateId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text })
//   })
//     .then(res => res.json())
//     .then(res => {
//       if (!res.success)
//         this.setState({ error: res.error.message || res.error });
//       else this.setState({ text: "", updateId: null });
//     });
// };
