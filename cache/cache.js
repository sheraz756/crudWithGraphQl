const NodeCache = require('node-cache'); 
const cache = new NodeCache();

const set = (key, value, ttlInSeconds) => {
  cache.set(key, value, ttlInSeconds);
};

const get = (key) => {
  return cache.get(key);
};

module.exports = { set, get };
