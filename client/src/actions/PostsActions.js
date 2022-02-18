import * as api from "../api";

export const GetPosts = async () => {         //Will return an action that wil be dispatched to the redux store
    const res = await api.FetchPosts();
    const Posts = res.data;
    return {type: "FETCH_POSTS", payload: Posts};
};

export const CreatePost = async newPostData => {
    const res = await api.CreatePost(newPostData);
    const NewPost = res.data;
    return {type: "CREATE_POST", payload: NewPost};
};

export const UpdatePost = async (updatedPostid, updatedPostData) => {
    const res = await api.UpdatePost(updatedPostid, updatedPostData);
    const UpdatedPost = res.data;
    return {type: "UPDATE_POST", payload: UpdatedPost};
};
