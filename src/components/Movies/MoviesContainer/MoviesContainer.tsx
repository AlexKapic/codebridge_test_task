import Grid from "@mui/material/Grid";
import styles from "./style.module.scss";

export const MoviesContainer = () => {
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
