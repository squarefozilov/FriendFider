var path = require('path');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      
      app.get("/ser", function(req, res) {
        console.log("hhhh");
        res.sendFile(path.join(__dirname, "../public/ser.html"));
      });
      
      app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
      
};