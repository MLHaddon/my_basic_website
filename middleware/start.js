const express = require('express');
const router = express.Router();

// Middleware request functions
router.use((req, res, next) => {
  console.log('Start request activated.');
  console.log('DateTime at current request: ' + Date.now());
  next();
});

module.exports = router;