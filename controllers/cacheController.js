const User = require('../model/user');

const cache = require('../cache/cache');

const getUserData = async (userId) => {
  const cachedData = cache.get(`user:${userId}`);
  if (cachedData) {
    console.log('Data fetched from cache');
    return cachedData;
  } else {
    console.log('Data fetched from the database');
    const userData = await User.findById(userId);
    cache.set(`user:${userId}`, userData, 3600);
    return userData;
  }
};

module.exports = { getUserData };
