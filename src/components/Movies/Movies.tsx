import Container from "@mui/material/Container";
import { MoviesContainer } from "./MoviesContainer";
import { SearchInput } from "./SearchInput";

export const Movies = () => {
  return (
    <div>
      <Container style={{ maxWidth: "1338px" }}>
        <SearchInput />
        <MoviesContainer />
      </Container>
    </div>
  );
};
