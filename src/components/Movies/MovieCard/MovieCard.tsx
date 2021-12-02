import { Link as RouteLink } from "react-router-dom";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { ArrowRight, Calendar } from "akar-icons";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { MovieImgUrl } from "../../../common/enums";
import { IMovieCard } from "../../../common/interfaces";
import { MOVIE_OVERVIEW_LIMIT } from "../../../common/constants";
import styles from "./style.module.scss";

type Props = IMovieCard & { searchQuery: string[] };

export const MovieCard: React.FC<Props> = ({
  id,
  title,
  poster_path: poster,
  release_date: date,
  overview,
  searchQuery,
}) => {
  const truncOverview =
    overview.length > MOVIE_OVERVIEW_LIMIT
      ? overview.slice(0, 97) + "..."
      : overview;

  return (
    <RouteLink to={`${id}`} style={{ textDecoration: "none" }}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600"
            image={`${MovieImgUrl.poster}${poster}`}
            alt={title}
          />
          <CardContent>
            <Typography paragraph className={styles.card_date}>
              <Calendar size={13} className={styles.card_date_icon} />
              {moment(date).format("MMMM Do, YYYY")}
            </Typography>
            <Highlighter
              className={styles.card_title}
              searchWords={searchQuery}
              autoEscape={true}
              textToHighlight={title}
            />
            <Highlighter
              className={styles.card_content}
              searchWords={searchQuery}
              autoEscape={true}
              textToHighlight={truncOverview}
            />
            <Typography className={styles.card_link}>
              Read more
              <ArrowRight size={12} className={styles.card_link_arrow} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </RouteLink>
  );
};
