import axios from "axios";

//actiontypes
const FETCH_ALL_BOOKMARKS = "FETCH_ALL_BOOKMARKS";
// const ADD_BOOKMARK = "ADD_BOOKMARK";

//action creator
const fetchAllBookmarks = (bookmarks) => {
  return {
    type: FETCH_ALL_BOOKMARKS,
    payload: bookmarks,
  };
};

// const addBookmark = (recipeId) => {
//     return {

//     }
// }

//thunk creators
export const fetchAllBookmarksThunk = () => (dispatch) => {
  return axios
    .get("/api/bookmarks")
    .then((res) => res.data)
    .then((bookmarks) => dispatch(fetchAllBookmarks(bookmarks)))
    .catch((err) => console.log(err));
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKMARKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
