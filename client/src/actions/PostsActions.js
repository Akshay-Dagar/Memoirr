import * as api from "../api";
import Posts from "../Posts/Posts";

export const GetPosts = async () => {
    const res = await api.FetchPosts();
    const Posts = res.data;
    return {type: "FETCH_POSTS", payload: Posts};
};
