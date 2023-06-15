"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taskInput = exports.displayItem = exports.deleteTask = exports.clearItem = exports.arrayOfTasks = exports.addItem = void 0;
var _createItem = _interopRequireDefault(require("./createItem.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// eslint-disable-next-line

// eslint-disable-next-line
var arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
exports.arrayOfTasks = arrayOfTasks;
var taskInput = document.querySelector('.taskInput');
exports.taskInput = taskInput;
var toDoList = document.querySelector('.toDoList');

// displayItem function
var displayItem = function displayItem() {
  toDoList.innerHTML = '';
  arrayOfTasks.forEach(function (todo) {
    var element = (0, _createItem["default"])(todo);
    toDoList.appendChild(element);
  });
  taskInput.value = '';
};

// addItem function
exports.displayItem = displayItem;
var addItem = function addItem() {
  if (taskInput.value !== '') {
    var task = {
      description: taskInput.value,
      completed: false,
      index: arrayOfTasks.length + 1
    };
    arrayOfTasks.push(task);
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    displayItem();
  }
};

// deleteTask function
exports.addItem = addItem;
var deleteTask = function deleteTask(index) {
  exports.arrayOfTasks = arrayOfTasks = arrayOfTasks.filter(function (task) {
    return task.index !== index;
  });
  exports.arrayOfTasks = arrayOfTasks = arrayOfTasks.map(function (task, index) {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayItem();
};

// clearItem function
exports.deleteTask = deleteTask;
var clearItem = function clearItem() {
  exports.arrayOfTasks = arrayOfTasks = arrayOfTasks.filter(function (clear) {
    return clear.completed === false;
  });
  exports.arrayOfTasks = arrayOfTasks = arrayOfTasks.map(function (task, index) {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayItem();
};
exports.clearItem = clearItem;