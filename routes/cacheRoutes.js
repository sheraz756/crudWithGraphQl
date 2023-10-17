const express = require('express');
const userController = require('../controllers/cacheController');

const router = express.Router();

router.get('/user/:id', async (req, res) => {
  const userId = req.params.id;
  const userData = await userController.getUserData(userId);
  res.json(userData);
});

module.exports = router;
