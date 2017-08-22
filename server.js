// SERVER.JS

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set up public directory for express use
app.use(express.static('public'));

// =========== ROUTER =========================//

app.use('/', routes);


// =========== PORT SETUP =========================//
app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000')
})










// ====================== ORIGINAL ================
// app.get('/', (req, res) => {
//   const toDoS = dal.getToDos();
//   const doneToDoS = dal.getCheckedToDos();
//   res.render('todo', {toDoS: toDoS, doneToDoS: doneToDoS});
// })
//
// app.post('/', (req, res) => {
//   dal.addToDo(req.body.addTask);
//   res.redirect('/');
// });
//
// app.post('/complete/:index', (req, res) => {
//   dal.checkToDo(parseInt(req.params.index, 10));
//   res.redirect('/');
// })
//
// app.post('/delete/:index', (req, res) => {
//   let check = dal.deleteToDo(parseInt(req.params.index, 10));
//   let check2 = req.params.index;
//   res.redirect('/')
// })
// app.get('/edit/:index', (req, res) => {
//   let getToDo = dal.getEditToDo(parseInt(req.params.index, 10));
//   res.render('editToDo', getToDo)
// })
//
// app.post('/edit/:index', (req, res) => {
//   dal.editToDo(parseInt(req.params.index, 10), req.body);
//   res.redirect('/');
// })
