import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { IMovieCard } from "../../../common/interfaces";
import { moviesApi } from "../../../services";
import { MovieCard } from "../MovieCard";
import styles from "./style.module.scss";

export const MoviesContainer = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovieCard[]>();

  useEffect(() => {
    moviesApi.getMovies(page).then((res) => setMovies(res.results));
  }, [page]);

  return (
    <Grid container spacing={5.625} className={styles.moviesContainer}>
      {movies?.length &&
        movies.map((movie) => (
          <Grid item xs={4} key={movie.id}>
            <MovieCard {...movie} />
          </Grid>
        ))}
    </Grid>
  );
};
