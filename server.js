var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
 var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./js_routes/api-routes.js")(app);
require("./js_routes/html-routes.js")(app);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

  initializeTables();
});

function initializeTables() {

    // Creating item types
  db.Item_Type.findOrCreate({
    where: {
      item_type_name: "Entree"
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Item_Type.findOrCreate({
    where: {
      item_type_name: "Side"
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Item_Type.findOrCreate({
    where: {
      item_type_name: "Drink"
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Item_Type.findOrCreate({
    where: {
      item_type_name: "Dessert"
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  // ----------------------------
  // Creating menu items
  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Krabby Patty",
      item_type_name: "Entree",
      item_price: 1.25,
      item_calories: 500
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  
  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Double Krabby Patty",
      item_type_name: "Entree",
      item_price: 2.00,
      item_calories: 700
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Triple Krabby Patty",
      item_type_name: "Entree",
      item_price: 3.00,
      item_calories: 900
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Krabby Meal",
      item_type_name: "Entree",
      item_price: 3.50,
      item_calories: 1000
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Double Krabby Meal",
      item_type_name: "Entree",
      item_price: 3.75,
      item_calories: 1200
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Triple Krabby Meal",
      item_type_name: "Entree",
      item_price: 4.00,
      item_calories: 1400
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Salty Sea Dog",
      item_type_name: "Entree",
      item_price: 1.25,
      item_calories: 150
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Footlong",
      item_type_name: "Entree",
      item_price: 2.00,
      item_calories: 300
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Krusty Krab Pizza",
      item_type_name: "Entree",
      item_price: 5.00,
      item_calories: 1100
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Sailor's Surprise",
      item_type_name: "Entree",
      item_price: 3.00,
      item_calories: 1000
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Coral Bits",
      item_type_name: "Side",
      item_price: 1.5,
      item_calories: 160
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  
  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Kelp Fries",
      item_type_name: "Side",
      item_price: 1.5,
      item_calories: 300
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Golden Loaf",
      item_type_name: "Side",
      item_price: 2,
      item_calories: 300
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Seafoam Soda",
      item_type_name: "Drink",
      item_price: 2,
      item_calories: 200
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Kelp Shake",
      item_type_name: "Drink",
      item_price: 2,
      item_calories: 600
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

  db.Menu_Item.findOrCreate({
    where: {
      item_name: "Pie Bomb",
      item_type_name: "Dessert",
      item_price: 0,
      item_calories: 1500
    }
  }).then(function([user, created]) {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
  })

}