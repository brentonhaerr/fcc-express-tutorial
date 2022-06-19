let express = require('express');
let app = express();

function serveMessage(req, res) {
  res.send("Hello world");
}

app.get("/", serveMessage);

































 module.exports = app;
