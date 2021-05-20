// ACTIONS

const GET_STATUS = "GET_STATUS";
const GET_VERSION = "GET_VERSION";
const SET_RESULT = "SET_RESULT";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";
const SET_ERROR = "SET_ERROR";

// ACTION CREATORS

export const serverStatus = (status) => ({
  type: GET_STATUS,
  status
});

export const serverVersion = (version) => ({
  type: GET_VERSION,
  version
});

export const setResult = (result) => ({
  type: SET_RESULT,
  result
});

export const setFetchingStatus = (isFetching) => ({
  type: SET_FETCHING_STATUS,
  isFetching
});

export const setError = (error) => ({
  type: SET_ERROR,
  error
});

// REDUCER

const reducerFunctions = (state = {isFetching: true}, action) => {
  switch (action.type) {
    case GET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case GET_VERSION:
      return {
        ...state,
        version: action.version
      };
    case SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.result,
        error: undefined
      };
    case SET_ERROR:
      return {
        ...state,
        result: undefined,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducerFunctions;
