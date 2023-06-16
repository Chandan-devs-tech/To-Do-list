"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _addItem = require("./addItem.js");
var _checker = _interopRequireDefault(require("./checker.js"));
var _createIcon = _interopRequireDefault(require("./createIcon.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// eslint-disable-next-line

var clearAllBtn = document.querySelector('.clearList');

// createElement function
var createElement = function createElement(todo) {
  var div = document.createElement('div');
  div.classList.add('listItem');
  var attr = document.createAttribute('data-id');
  attr.value = todo.index;
  div.setAttributeNode(attr);
  //   creating div for checkbox and input
  var divElement = document.createElement('div');
  divElement.className = 'checkText';
  //   creating text input
  var inputTextElement = document.createElement('input');
  inputTextElement.classList.add('toDoText');
  inputTextElement.type = 'text';
  inputTextElement.value = todo.description;
  // event listener for edit
  inputTextElement.addEventListener('blur', function () {
    var newInputValue = inputTextElement.value;
    todo.description = newInputValue;
    localStorage.setItem('arrayOfTasks', JSON.stringify(_addItem.arrayOfTasks));
  });
  // creating checkbox
  var inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = 'myCheckbox';
  //   checkbox event listener
  inputElement.addEventListener('change', function () {
    (0, _checker["default"])(inputTextElement, inputElement, div, todo, _addItem.arrayOfTasks);
  });
  if (todo.completed) {
    inputTextElement.classList.toggle('lineThrough');
    div.classList.toggle('completed');
    inputElement.checked = true;
  }
  //    clear all event listener
  clearAllBtn.addEventListener('click', _addItem.clearItem);
  //   appending checkbox and text input to the div
  divElement.appendChild(inputElement);
  divElement.appendChild(inputTextElement);
  // create icon function called
  var icon = (0, _createIcon["default"])('fa-trash-can');
  // add event listener delete icon
  icon.addEventListener('click', function () {
    return (0, _addItem.deleteTask)(todo.index);
  });
  //   buttonElement.appendChild(iElement);
  div.appendChild(divElement);
  div.appendChild(icon);
  return div;
};
var _default = createElement;
exports["default"] = _default;