import Container from "@mui/material/Container";
import { MoviesContainer } from "./MoviesContainer";
import { SearchInput } from "./SearchInput";

export const Movies = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <SearchInput />
        <MoviesContainer />
      </Container>
    </div>
  );
};
