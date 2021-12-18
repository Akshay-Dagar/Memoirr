import axios from "axios";

const url = "https://localhost:5000/posts";

export const FetchPosts = () => axios.get(url);