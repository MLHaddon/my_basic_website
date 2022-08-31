const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/', (req, res) => {
  res.send("You just called the post method at '/'!\n");
});


app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});