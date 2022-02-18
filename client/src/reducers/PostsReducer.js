export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        case "CREATE_POST":
            return [...posts, action.payload];
        case "UPDATE_POST":
            return posts.map(post => (post._id === action.payload._id ? action.payload : post));        //see which post's id in posts matches payload's id and update that post to action.payload, leave the rest as they are
        case "DELETE_POST":
            return posts.filter(post => post._id !== action.payload);                
        default:
            return posts;
    }
}