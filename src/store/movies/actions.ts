import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMoviesResponse } from "../../common/interfaces";
import { moviesApi } from "../../services";
import { ActionType } from "./actionsTypes";

const getMovies = createAsyncThunk<IMoviesResponse, number | undefined>(
  ActionType.GET_MOVIES,
  async (page?: number) => moviesApi.getMovies(page)
);

const getMovie = createAsyncThunk(ActionType.GET_MOVIE, async (id: string) =>
  moviesApi.getMovie(id)
);

const searchMovies = createAsyncThunk(
  ActionType.SEARCH_MOVIES,
  async (query: string) => moviesApi.searchMovie(query)
);

export { getMovies, getMovie, searchMovies };
