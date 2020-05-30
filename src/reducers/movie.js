export const SET_MOVIE = "MOVIE/SET_MOVIE";

export const setMovie = data => ({
  type: SET_MOVIE,
  data,
});

const initialState = null;

export default function movie(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return action.data;
    default:
      return state;
  }
}
