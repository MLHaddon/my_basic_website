const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET route to items.');
});

router.get('/:id', (req, res) => {
  res.send('Item ID is... ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('POST route to items.');
});

module.exports = router;