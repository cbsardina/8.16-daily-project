// SERVER.JS

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set up public directory for express use
app.use(express.static('public'));

/////////////////////////////////////////////////
////////////////ROUTES///////////////////////////
app.get("/", (req, res) => {
    res.redirect('/todo')
})

app.get('/todo', (req, res) => {
  const toDoS = dal.getToDos();       //THIS WORKS
  res.render('todo', {toDoS: toDoS});
})

app.post('/todo', (req, res) => {       //check this
  dal.addToDo(req.body.addTask);
  res.redirect('todo');
});

app.delete('/todo:item', (req, res) => {
  toDoData = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
      res.JSON(toDoData);
});









// let server = http.createServer(function(req, res) {
//   console.log('request was made:' + req.url);
//   if(req.url === '/home' || req.url === '/') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   }
//   else if (req.url === '/contact') {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   }
//   else if (req.url === '/api/ninjas') {
//     let ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas));
//   }
//   else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// })

















// =========== PORT SETUP =========================//
app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})
