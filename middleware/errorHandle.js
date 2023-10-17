const logger = require('../logging/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
};

module.exports = errorHandler;
