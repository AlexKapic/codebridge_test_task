import Container from "@mui/material/Container";
import { useState } from "react";
import { MoviesContainer } from "./MoviesContainer";
import { SearchInput } from "./SearchInput";

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Container style={{ maxWidth: "1338px" }}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <MoviesContainer searchQuery={searchQuery} />
      </Container>
    </div>
  );
};
