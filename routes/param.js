var express = require("express");
var router = express.Router();

router.get("/:userId", function (req, res, next) {
  res.send("userId: " + req.params.userId);
});

module.exports = router;
