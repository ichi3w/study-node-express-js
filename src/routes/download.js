var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.download("public/images/hatofly.png");

  console.log("Downloading file...");
});

module.exports = router;
