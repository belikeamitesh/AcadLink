exports.central = (err, req, res, next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  return res.status(err.statusCode).json({
    message: err.message,
    status: err.statusCode,
  });
};

exports.notFound = (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'Not Found',
  });
};
