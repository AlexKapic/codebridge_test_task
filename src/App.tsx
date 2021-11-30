import React from "react";
import { Routes, Route } from "react-router-dom";
import { Movies } from "./components/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />}>
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
