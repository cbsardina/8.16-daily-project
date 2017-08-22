// DAL.JS

let toDoData = require('./data');

// ================= GET TO DO LIST ==============
function getToDos () {
  return toDoData.filter(function(toDo) {
    return toDo.complete === false;
  })
}
function getCheckedToDos () {
  return toDoData.filter(function(toDo) {
    return toDo.complete === true;
  })
}

// ================ ADD TO DO ======================
function addToDo (newTask) {
  let newToDo = {index: toDoData.length +1, item: newTask, complete: false};
  toDoData.push(newToDo);
}

// ================ CHECK AS DONE ==================
function checkToDo (indx) {
  toDoData.map((toDo) => {
    if(toDo.index === indx) {
      toDo.complete = true;
      return toDo;
  }
  else { return toDo; }
  })
}

// ============== DELETE ==================
function deleteToDo (indx) {
  let updateToDo = toDoData.filter(function(toDo, idx, arr){
      return toDo.index !== indx;
  })
  toDoData = updateToDo;
  return toDoData;
}

// ============= EDIT ===================
function getEditToDo (indx) {
  return toDoData.find((toDo) => {
    return indx === toDo.index;
  })
}

function editToDo (indx, update) {
  return toDoData.map((toDo)=> {
    if(indx === toDo.index) {
      toDo.item = update.editToDo;
      return toDo;
    }
  })
}

module.exports = {
  getToDos: getToDos,
  addToDo: addToDo,
  checkToDo: checkToDo,
  getCheckedToDos: getCheckedToDos,
  deleteToDo: deleteToDo,
  getEditToDo: getEditToDo,
  editToDo: editToDo
}
