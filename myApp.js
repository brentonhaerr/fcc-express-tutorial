let express = require('express');
let app = express();
require('dotenv').config();

function serveJSON(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({"message":message, "message_style": process.env.MESSAGE_STYLE});
}

app.get("/json", serveJSON);































 module.exports = app;
