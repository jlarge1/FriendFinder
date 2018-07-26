// dependencies
var express = require("express");
var bodyParser = require("body-parser");

// set up express
var app = express();
var PORT = process.env.PORT || 8080;

// set up express to parse data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
