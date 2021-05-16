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
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const encrypt = (text) => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const {data} = await axios.post(process.env.REACT_APP_API_URL + "/encrypt", text);
    dispatch(setResult(data.result));
  } catch (error) {
    dispatch(setError(error.response.data.error || error.response.data.message));
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const decrypt = (cypher) => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const {data} = await axios.post(process.env.REACT_APP_API_URL + "/decrypt", cypher);
    dispatch(setResult(data.result));
  } catch (error) {
    dispatch(setError(error.response.data.error || error.response.data.message));
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};
