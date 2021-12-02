import { useEffect, useState } from "react";
import { Pagination, Grid } from "@mui/material";
import { Spinner } from "../../common/Spinner";
import { MovieCard } from "../MovieCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getMovies } from "../../../store/movies/actions";
import styles from "./style.module.scss";

type Props = {
  searchQuery: string;
};

export const MoviesContainer: React.FC<Props> = ({ searchQuery }) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { results: movies, total_pages: pages } = useAppSelector(
    (state) => state.movies
  );
  const isLoading = useAppSelector((state) => state.isLoading);

  const query = searchQuery.split(" ");

  const handlePaginate = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page, dispatch]);

  return (
    <>
      <Grid container spacing={5.625} className={styles.moviesContainer}>
        {movies &&
          movies.map((movie) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={movie.id}>
              <MovieCard {...movie} searchQuery={query} />
            </Grid>
          ))}
        {isLoading && <Spinner size={100} />}
      </Grid>
      <Pagination
        className={styles.pagination}
        count={pages}
        page={page}
        onChange={handlePaginate}
        size="large"
        color="primary"
      />
    </>
  );
};
