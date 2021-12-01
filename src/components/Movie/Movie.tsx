import { Container, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ArrowLeft } from "akar-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieImgUrl } from "../../common/enums";
import { IMovieResponse } from "../../common/interfaces";
import { moviesApi } from "../../services";
import styles from "./style.module.scss";

export const Movie = () => {
  const { movieId } = useParams<string>();
  const [movie, setMovie] = useState<IMovieResponse>();

  useEffect(() => {
    movieId && moviesApi.getMovie(movieId).then((res) => setMovie(res));
  }, [movieId]);

  return (
    <>
      <div
        className={styles.movie_backdrop}
        style={
          movie && {
            backgroundImage: `url(${MovieImgUrl.backdrop}${movie?.backdrop_path})`,
          }
        }
      />
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
      </Container>
    </>
  );
};
