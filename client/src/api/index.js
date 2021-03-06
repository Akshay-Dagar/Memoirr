import axios from "axios";

const url = "http://localhost:5000/posts";

export const FetchPosts = () => axios.get(url);

export const CreatePost = newPostData => axios.post(url, newPostData);

export const UpdatePost = (updatedPostId, updatedPostData) => axios.patch(url, updatedPostData, {params:{id: updatedPostId}});

export const DeletePost = id => axios.delete(url, {params:{id:id}});                            //body is not needed in axios.delete

export const LikePost = id => axios.patch(url + "/like", null, {params:{id:id}});               //body is null