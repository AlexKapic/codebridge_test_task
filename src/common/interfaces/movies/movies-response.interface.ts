import { IMovieCard } from "./movie-card.interface";

interface IMoviesResponse {
  page: number;
  results: IMovieCard[];
  total_results: number;
  total_pages: number;
}
export type { IMoviesResponse };
