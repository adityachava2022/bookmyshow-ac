const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({
        success: false,
        title: "Unauthorized",
        message: err.message,
      });
      break;
    case 404:
      res.json({
        success: false,
        title: "Not Found",
        message: err.message,
      });
      break;
    case 500:
      res.json({
        success: false,
        title: "Server Error",
        message: err.message,
      });
      break;
    default:
      break;
  }
};

module.exports = errorHandler;
