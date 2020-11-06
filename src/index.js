var express = require("express");
var app = express();
var server = require("http").createServer(app);

server.listen(8080);

app.get("/", function(req, res) {
  res.end("Hello. Please add paramter to url!");
});

app.get("/:id(\\d+)", function(req, res) {
  var id = req.params.id;
  res.end("Received parameter:" + id);
  console.log("id=" + id);
});
