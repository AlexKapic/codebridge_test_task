import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styles from "./style.module.scss";

export const SearchInput = () => {
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
        />
      </div>
      <Typography className={styles.search_result}>Results: {0}</Typography>
      <Divider />
    </>
  );
};
