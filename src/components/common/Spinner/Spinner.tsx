import { CircularProgress } from "@mui/material";
import styles from "./style.module.scss";

type Props = {
  size?: number | string;
};

export const Spinner: React.FC<Props> = ({ size }) => {
  return (
    <div className={styles.spinner}>
      <CircularProgress size={size} />
    </div>
  );
};
