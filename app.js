const express = require("express");
const movies = require("./movies.json");

const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => { // path-to-regexp
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if(movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found" });
});
PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
