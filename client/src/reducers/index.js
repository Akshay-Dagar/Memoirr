import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import PostToBeUpdatedIdReducer from "./PostToBeUpdatedIdReducer";

export default combineReducers({
    Posts: PostsReducer,
    PostToBeUpdatedId: PostToBeUpdatedIdReducer
})