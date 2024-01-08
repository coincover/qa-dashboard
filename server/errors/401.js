module.exports = error401 = async (req, res) => {
  res.status(401);
  res.json({
    error: {
      message: 'Unauthorized: Invalid API Key'
    }
  });
};
