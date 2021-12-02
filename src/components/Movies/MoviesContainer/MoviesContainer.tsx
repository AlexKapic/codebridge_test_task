import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getMovies } from "../../../store/movies/actions";
import { Spinner } from "../../common/Spinner";
import { MovieCard } from "../MovieCard";
import styles from "./style.module.scss";

export const MoviesContainer = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const movies = useAppSelector((state) => state.movies.results);
  const isLoading = useAppSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page, dispatch]);

  return (
    <>
      <Grid container spacing={5.625} className={styles.moviesContainer}>
        {movies?.length &&
          movies.map((movie) => (
            <Grid item xs={4} key={movie.id}>
              <MovieCard {...movie} />
            </Grid>
          ))}
        {isLoading && <Spinner size={100} />}
      </Grid>
    </>
  );
};
