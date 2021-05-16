import {createStore, applyMiddleware} from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import reducerFunctions from "./reducerFunctions";

export default createStore(reducerFunctions, applyMiddleware(thunkMiddleware, loggerMiddleware));
