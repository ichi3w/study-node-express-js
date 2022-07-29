var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var myLogger = require("./middleware/my_logger.js");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var downloadRouter = require("./routes/download");
var paramRouter = require("./routes/param");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(myLogger({ message: "Hello World" }));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/download", downloadRouter);
app.use("/user", paramRouter);

module.exports = app;
