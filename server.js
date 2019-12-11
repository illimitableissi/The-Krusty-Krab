var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
<<<<<<< HEAD
// var db = require("./models");
=======
 var db = require("./models");
>>>>>>> DB_Config

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(express.static("public"));

// Syncing our sequelize models and then starting our express app
// db.sequelize.sync({ force: true }).then(function() {

// require("./routes/api-routes.js")(app);
require("./js_routes/html-routes.js")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
=======


// Syncing our sequelize models and then starting our express app
 
 require("./routes/api-routes.js")(app);
//require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}) 
>>>>>>> DB_Config
});
