const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET route to items.');
});

router.post('/', (req, res) => {
  res.send('POST route to items.');
});

module.exports = router;