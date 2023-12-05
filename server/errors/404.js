module.exports = error404 = async (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
};
