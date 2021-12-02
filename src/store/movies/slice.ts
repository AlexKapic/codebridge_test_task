import { createSlice } from "@reduxjs/toolkit";
import { IMovieResponse, IMoviesResponse } from "../../common/interfaces";
import { getMovies, getMovie, searchMovies } from "./actions";
import { ActionType } from "./actionsTypes";

type State = {
  movies: IMoviesResponse;
  currentMovie: IMovieResponse;
  isLoading: boolean;
};

const initialState: State = {
  movies: {} as IMoviesResponse,
  currentMovie: {} as IMovieResponse,
  isLoading: false,
};

const moviesApiSlice = createSlice({
  name: "moviesApi",
  initialState,
  reducers: {
    [ActionType.RESET_MOVIE]: (state) => {
      state.currentMovie = initialState.currentMovie;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentMovie = action.payload;
      })
      .addCase(getMovie.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const moviesActions = moviesApiSlice.actions;

export default moviesApiSlice.reducer;
