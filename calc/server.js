const express = require("express");

const app = express();
const port = 2000;

app.get("/info", (req, res) => {
  res.json({
    message: "get request running for our server",
  });
});

app.listen(port, () => {
  console.log("Server has been started on port 3000");
});
