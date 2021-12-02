import { Container, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ArrowLeft } from "akar-icons";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getMovie } from "../../store/movies/actions";
import { moviesActions } from "../../store/movies/slice";
import { MovieImgUrl } from "../../common/enums";
import styles from "./style.module.scss";
import { Spinner } from "../common/Spinner";

export const Movie = () => {
  const { movieId } = useParams<string>();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentMovie);
  const isLoading = useAppSelector((state) => state.isLoading);

  const backStyle = movie.backdrop_path
    ? { backgroundImage: `url(${MovieImgUrl.backdrop}${movie.backdrop_path})` }
    : {};

  useEffect(() => {
    movieId && dispatch(getMovie(movieId));
    return (): void => {
      dispatch(moviesActions.resetMovie());
    };
  }, [movieId, dispatch]);

  return (
    <>
      <div className={styles.movie_backdrop} style={backStyle} />
      <Container className={styles.movie_container}>
        <Card className={styles.movie_info}>
          <CardContent>
            <Typography className={styles.movie_info_title} align="center">
              {movie?.title}
            </Typography>
            <Typography className={styles.movie_info_desription}>
              {movie?.overview}
            </Typography>
          </CardContent>
        </Card>
        <Link href="/movies" underline="none" className={styles.movie_link}>
          <ArrowLeft size={12} className={styles.movie_link_arrow} />
          Back to homepage
        </Link>
        {isLoading && <Spinner size={100} />}
      </Container>
    </>
  );
};
