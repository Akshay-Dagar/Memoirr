import thunk from "redux-thunk";
import {createStore, applyMiddleware, compose} from "redux";
import RootReducer from "../src/reducers/index.js";

export default createStore(RootReducer, compose(applyMiddleware(thunk)));