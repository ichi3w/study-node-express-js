var path = require("path");
var express = require("express");
var router = express.Router();

const callback1 = (req, res, next) => {
  console.log("Callback 1");
  next();
};

const publicPath2 = path.join(
  __dirname.replace("/src/routes", ""),
  "public2/users"
);
router.use(express.static(publicPath2));

console.log("わんんんんんんんんんんんんんんんん");
console.log(publicPath2);

/* GET users listing. */
router.get("/", callback1, function (req, res, next) {
  // res.send("respond with a resource");
  res.render("index", { title: "Express" });

  console.log("Console Test Users...");
});

module.exports = router;
