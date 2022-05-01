const express = require("express");
const app = express();
app.set("port", 3000);

app.get("/", (req, res) => {
  res.sendFile("/home/benjap/Code/noud/src/views/index.html");
});

app.listen(app.get("port"), () => {
  console.log("server running on port: ", app.get("port"));
});
