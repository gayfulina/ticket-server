const serviceHeader = (controller) => (req, res, next) => {
  res.set('MODULE', controller);
  next();
};

module.exports = serviceHeader;
