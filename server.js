const { animals } = require("./data/animals");

const express = require("express");

const app = express();

app.get("/api/animals", (req, res) => {
  res.send(animals);
});

app.listen(3001, () => {
  console.log("API server now on port 3001!");
});
