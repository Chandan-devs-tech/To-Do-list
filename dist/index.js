"use strict";

require("./style.css");
require("@fortawesome/fontawesome-free/css/all.css");
var _addItem = require("./modules/addItem.js");
// fetching containers

var addBtn = document.getElementById('addBtn');
var taskInput = document.querySelector('.taskInput');

// event listeners
document.addEventListener('DOMContentLoaded', _addItem.displayItem);
addBtn.addEventListener('click', _addItem.addItem);
taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    (0, _addItem.addItem)();
  }
});