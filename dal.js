// DAL.JS

let toDoData = require('./data');


function getToDos () {
  return toDoData;
}

function addToDo (newTask) {
  let newToDo = {item: newTask};
  toDoData.push(newToDo);
}



module.exports = {
  getToDos: getToDos,
  addToDo: addToDo
}
