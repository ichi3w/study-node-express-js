var express = require("express");
var router = express.Router();

const callback1 = (req, res, next) => {
  console.log("Callback 1");
  next();
};

/* GET users listing. */
router.get("/", callback1, function (req, res, next) {
  // res.send("respond with a resource");
  res.render("index", { title: "Express" });

  console.log("Console Test Users...");
});

module.exports = router;
