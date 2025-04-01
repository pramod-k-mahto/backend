const e = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/products", (req, res) => {
  res.send("All products");
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
