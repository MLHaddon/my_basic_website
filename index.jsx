const express = require('express');
const app = express();

const port = 5000;

const users = require('./routes/users.jsx');
const items = require('./routes/items.jsx');

// Simple request timer
app.use('/items', (req, res, next) => {
  console.log('A request was made at ' + Date.now());
  next();
});

app.use('/users', users);
app.use('/items', items);

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/:id', (req, res) => {
  res.send('The request that you made is ' + req.params.id);
});

app.get('/things/:id([0-9]{5})', function(req, res){
  res.send('id: ' + req.params.id);
});

app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});

app.post('/', (req, res) => {
  res.send(`You just called the post method at '/'!\n`);
});

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});