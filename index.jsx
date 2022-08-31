const express = require('express');
const app = express();

const port = 5000;

const users = require('./routes/users.jsx');
const items = require('./routes/items.jsx');

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/', (req, res) => {
  res.send("You just called the post method at '/'!\n");
});

app.use('/users', users);
app.use('/items', items);


app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});