import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delte auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
