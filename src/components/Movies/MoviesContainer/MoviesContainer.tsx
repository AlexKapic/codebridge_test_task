import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { IMovieCard } from "../../../common/interfaces";
import { moviesApi } from "../../../services";
import styles from "./style.module.scss";

export const MoviesContainer = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovieCard[]>();

  useEffect(() => {
    moviesApi.getMovies(page).then((res) => console.log(res));
  }, []);
  return (
    <Grid container className={styles.moviesContainer}>
      <Grid item xs={4}>
        xs=8
      </Grid>
      <Grid item xs={4}>
        xs=4
      </Grid>
      <Grid item xs={4}>
        xs=4
      </Grid>
      <Grid item xs={4}>
        xs=8
      </Grid>
    </Grid>
  );
};
