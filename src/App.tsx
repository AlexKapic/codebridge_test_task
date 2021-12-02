import { Routes, Route, Navigate } from "react-router-dom";
import { Movie } from "./components/Movie";
import { Movies } from "./components/Movies";

function App() {
  return (
    <Routes>
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<Movie />} />
      <Route path="/" element={<Navigate replace to="/movies" />} />
      <Route path="*" element={<Navigate replace to="/movies" />} />
    </Routes>
  );
}

export default App;
