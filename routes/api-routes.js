var db = require("../models")

module.exports = function(app) {

    // Gets all orders and returns as json
    app.get("/api/orders", function(req, res) {
        db.Orders.findAll({}).then(function(dbOrders) {
            res.json(dbOrders);
        })
    })

    // POST route for adding a new order
    app.post("/api/orders", function(req, res) {
        db.Orders.create({
            // Once table is made put columns here
            // Format:
             text: req.body.text,
             complete: req.body.complete
        }).then(function(dbOrders) {
            res.json(dbOrders);
        }).catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
              res.json(err);
            });
    })

}