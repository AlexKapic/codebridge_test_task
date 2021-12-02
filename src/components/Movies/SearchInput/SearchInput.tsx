import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useDebouncedCallback } from "use-debounce";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import {
  DEBOUNCE_WAIT_MILLISECONDS,
  MINIMUM_QUERY_LENGTH_FOR_SEARCH,
} from "../../../common/constants";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getMovies, searchMovies } from "../../../store/movies/actions";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");
  const total = useAppSelector((state) => state.movies.total_results);

  const debouncedSearch = useDebouncedCallback(async (query) => {
    await dispatch(searchMovies(query)).then(() => setSearchQuery(query));

    // //Approximately the same logic would be if there were no search on the API side.
    // const names: IMovieCard[] = [];
    // const description: IMovieCard[] = [];
    // const queryArray = query.toLowerCase().split(" ");

    // movies.forEach((movie) => {
    //   queryArray.some((word: string) => {

    //     if (movie.title.toLowerCase().includes(word)) {
    //       names.push(movie);
    //       return true;
    //     } else if (movie.overview.toLowerCase().includes(word)) {
    //       description.push(movie);
    //       return true;
    //     }
    //   });
    // });
    // return [...names, ...description]
  }, DEBOUNCE_WAIT_MILLISECONDS);

  useEffect(() => {
    if (
      searchText.trim().length >= MINIMUM_QUERY_LENGTH_FOR_SEARCH &&
      searchText.trim() !== searchQuery
    ) {
      debouncedSearch(searchText.trim());
    } else if (!searchText.trim()?.length) {
      dispatch(getMovies());
      setSearchText("");
      setSearchQuery("");
    }
  }, [searchText, debouncedSearch, dispatch, searchQuery, setSearchQuery]);

  return (
    <>
      <Typography className={styles.search_title}>
        Filter by keywords
      </Typography>
      <div className={styles.search}>
        <SearchIcon className={styles.search_icon} />
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          className={styles.search_input}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <Typography className={styles.search_result}>
        Results: {searchQuery ? total : ""}
      </Typography>
      <Divider />
    </>
  );
};
