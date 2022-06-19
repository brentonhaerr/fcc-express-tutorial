let express = require('express');
let app = express();
require('dotenv').config();

function serveJSON(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({"message":message});
}

app.get("/json", serveJSON);































 module.exports = app;
