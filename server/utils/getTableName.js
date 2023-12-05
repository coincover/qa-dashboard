const getTableName = (type, product) => {
  if (type === 'e2e' || type === 'unit') {
    return `${type}_${product}`;
  }
  return null;
};

module.exports = {
  getTableName
};
