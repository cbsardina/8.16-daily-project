const express = require('express');
const router = express.Router();
const dal = require('../dal');

// ================= RENDER HOME ==================
router.route('/')
  .get(function(req, res) {
    const toDoS = dal.getToDos();
    const doneToDoS = dal.getCheckedToDos();
    res.render('todo', {toDoS: toDoS, doneToDoS: doneToDoS});
  })
  .post(function(req, res) {
    dal.addToDo(req.body.addTask);
    res.redirect('/');
  })

// ============== CHECK AS DONE ROUTE ===========
router.route('/complete/:index')
  .post(function(req, res) {
    dal.checkToDo(parseInt(req.params.index, 10));
    res.redirect('/');
  })

// =========== DELETE ROUTE ==============
router.route('/delete/:index')
  .post(function(req, res) {
    dal.deleteToDo(parseInt(req.params.index, 10));      res.redirect('/')
  })

// ================ EDIT ROUTE ==============
router.route('/edit/:index')
  .get(function(req, res) {
    let getToDo = dal.getEditToDo(parseInt(req.params.index, 10));
    res.render('editToDo', getToDo)
  })
  .post(function(req, res) {
    dal.editToDo(parseInt(req.params.index, 10), req.body);
    res.redirect('/');
  })

module.exports = router
