const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const port = 5000;

const users = require('./routes/users.jsx');
const items = require('./routes/items.jsx');
const start = require('./middleware/start.js');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

app.use(cookieParser())

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/users', (req, res, next) => {
  console.log('A request was made at users.');
  next();
});

app.use('/items', (req, res, next) => {
  console.log('A request was made at items');
  next();
});

app.use(express.static('public'));
app.use('/users', users);
app.use('/items', items);
app.use(start);


app.get('/', (req, res) => {
  res.render("images");
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


app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});