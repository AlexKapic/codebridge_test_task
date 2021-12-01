import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouteLink } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { MovieImgUrl } from "../../../common/enums";
import { IMovieCard } from "../../../common/interfaces";
import { ArrowRight, Calendar } from "akar-icons";
import moment from "moment";
import styles from "./style.module.scss";

export const MovieCard: React.FC<IMovieCard> = ({
  id,
  title,
  poster_path: poster,
  release_date: date,
  overview,
}) => {
  const truncOverview =
    overview.length > 100 ? overview.slice(0, 97) + "..." : overview;

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
            <Typography paragraph className={styles.card_title}>
              {title}
            </Typography>
            <Typography paragraph className={styles.card_content}>
              {truncOverview}
            </Typography>
            <Link href="#" underline="none" className={styles.card_link}>
              Read more
              <ArrowRight size={12} className={styles.card_link_arrow} />
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </RouteLink>
  );
};
