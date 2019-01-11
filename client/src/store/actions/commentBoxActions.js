import axios from "axios";
import {
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_COMMENT,
  LOADING_COMMENT,
  GET_ITEMS
} from "./types";

// loadCommentsFromServer = () => {
//   fetch(`http://localhost:5000/api/comments`)
//     .then(data => data.json())
//     .then(res => {
//       if (!res.success) this.setState({ error: res.error });
//       else this.setState({ data: res.data, isLoading: false });
//     });
// };

export const loadCommentsFromServer = () => dispatch => {
  dispatch(setCommentLoading());
  axios.get(`http://localhost:5000/api/comments`).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: {
        data: res.data,
        loading: !false
      }
    })
  );
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

export const setCommentLoading = () => {
  return {
    type: LOADING_COMMENT
  };
};
