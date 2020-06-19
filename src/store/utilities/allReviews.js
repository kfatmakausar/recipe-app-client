import axios from "axios";
import { fetchAllRecipesThunk } from "./allRecipes";

//actiontypes
const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
const ADD_REVIEW = "ADD_REVIEW";

//action creator
const fetchAllReviews = (reviews) => {
  return {
    type: FETCH_ALL_REVIEWS,
    payload: reviews,
  };
};

const addReview = (review) => {
  return {
    type: ADD_REVIEW,
    payload: review,
  };
};

//thunk creators
export const fetchAllReviewsThunk = () => (dispatch) => {
  return axios
    .get("/api/reviews")
    .then((res) => res.data)
    .then((reviews) => dispatch(fetchAllReviews(reviews)))
    .catch((err) => console.log(err));
};

export const addReviewThunk = (recipeId) => (dispatch) => {
  return axios
    .post("/api/reviews", { data: { recipeId, userId: 1 } })
    .then((res) => res.data)
    .then((review) => dispatch(addReview(review)))
    .catch((err) => console.log(err));
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return action.payload;
    case ADD_REVIEW:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
