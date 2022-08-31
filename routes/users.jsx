const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET route to users.');
});

router.post('/', (req, res) => {
  res.send('POST route to users.');
});

module.exports = router;