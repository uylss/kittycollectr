var Db = require("./dboperations");
var card = require("./card");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Card API is runnning at " + port);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/cards").get((request, response) => {
  Db.getCards().then((data) => {
    response.json(data[0]);
  });
});
