module.exports = (options) => {
  return (req, res, next) => {
    console.log("LOGGED " + options.message);
    next();
  };
};
