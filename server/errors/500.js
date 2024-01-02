module.exports = error500 = async (error, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
};
