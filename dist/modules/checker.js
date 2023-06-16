"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// checker function
var checker = function checker(input, checkbox, element, task, array) {
  if (checkbox.checked) {
    input.classList.toggle('lineThrough');
    element.classList.toggle('completed');
    task.completed = true;
  } else {
    input.classList.toggle('lineThrough');
    element.classList.toggle('completed');
    task.completed = false;
  }
  localStorage.setItem('arrayOfTasks', JSON.stringify(array));
};
var _default = checker;
exports["default"] = _default;