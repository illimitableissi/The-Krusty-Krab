var db = require("../models")
var receiptData = require("../data/receiptData.js");

module.exports = function(app) {

    // Gets all orders and returns as json
    app.get("/api/orders", function(req, res) {
        db.Order.findAll({}).then(function(dbOrders) {
            res.json(dbOrders);
        })
    })

    // Receipt data testing
    app.get("/api/receipt", function(req, res) {
            res.json(receiptData);
    })

    // POST route for adding a new order
    app.post("/api/orders", function(req, res) {
        db.Order.create({
            // Once table is made put columns here
            // Format:
             order_total: req.body.order_total
        }).then(function(dbOrder) {
            res.json(dbOrder);
        }).catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
              res.json(err);
            });
    })

    // Receipt data testing
    app.post("/api/receipt", function(req, res) {
        receiptData.push(req.body);
        res.json(req.body);
    })

    app.post("/api/clear", function(req, res) {
        // Empty out the array of data
        receiptData.length = 0;
        res.json({ ok: true });
      });

}