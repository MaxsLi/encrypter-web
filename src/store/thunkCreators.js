import axios from "axios";
import {serverStatus, serverVersion, setResult, setFetchingStatus, setError} from "./reducerFunctions";

export const ping = () => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    // Concurrent async requests
    await axios.all([
      axios.get(process.env.REACT_APP_API_URL + "/ping"),
      axios.get(process.env.REACT_APP_API_URL + "/version")
    ]).then(axios.spread(function (ping, version) {
      dispatch(serverStatus(ping.data.status));
      dispatch(serverVersion(version.data));
    }));
  } catch (error) {
    dispatch(setError(error.response || "Server offline, please come back later."));
    dispatch(serverStatus("offline"));
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const sendRequest = (route, body) => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const {data} = await axios.post(process.env.REACT_APP_API_URL + "/" + route, body);
    dispatch(setResult(data.result));
  } catch (error) {
    dispatch(setError(error.response.data.error || error.response.data.message));
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};
