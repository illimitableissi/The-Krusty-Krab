var path = require("path");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/krustykrab", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/krustykrab.html"));
    })

    app.get("/receipt", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/receipt.html"));
    })

    app.get("/orders", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/orders.html"));
    })

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/404.html"));
    })

}