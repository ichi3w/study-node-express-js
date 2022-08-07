var express = require("express");
var router = express.Router();

router.get("/:userId", function (req, res, next) {
  // throw new Error("TestError");
  // console.error("TestError");
  res.send("userId: " + req.params.userId);
});

module.exports = router;
