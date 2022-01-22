import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer.js";

export default combineReducers({
    Posts: PostsReducer
})