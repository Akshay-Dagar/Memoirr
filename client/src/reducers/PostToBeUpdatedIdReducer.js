export default (PostToBeUpdatedId = null, action) => {
    switch (action.type) {
        case "SET_POST_TO_BE_UPDATED":
            return action.payload;                         //PostToBeUpdatedId will now be equal to action.payload
        default:
            return PostToBeUpdatedId;
    }
}