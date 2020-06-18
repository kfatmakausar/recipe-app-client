import axios from "axios";

//actiontypes
const FETCH_ALL_BOOKMARKS = "FETCH_ALL_BOOKMARKS";
// const FETCH_USER_BOOKMARKS = "FETCH_USER_BOOKMARKS";
const ADD_BOOKMARK = "ADD_BOOKMARK";

//action creator
const fetchAllBookmarks = (bookmarks) => {
  return {
    type: FETCH_ALL_BOOKMARKS,
    payload: bookmarks,
  };
};

const addBookmark = (bookmark) => {
  return {
    type: ADD_BOOKMARK,
    payload: bookmark,
  };
};

//thunk creators
export const fetchAllBookmarksThunk = () => (dispatch) => {
  return axios
    .get("/api/bookmarks")
    .then((res) => res.data)
    .then((bookmarks) => dispatch(fetchAllBookmarks(bookmarks)))
    .catch((err) => console.log(err));
};

export const addBookThunk = (recipeId) => (dispatch) => {
  return axios
    .post("/api/bookmarks", { data: { recipeId, userId: 1 } })
    .then((res) => res.data)
    .then((bookmark) => dispatch(addBookmark(bookmark)))
    .catch((err) => console.log(err));
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKMARKS:
      return action.payload;
    case ADD_BOOKMARK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
