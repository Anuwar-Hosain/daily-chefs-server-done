const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const data = require("./data/all-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
