import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line
import { addItem, displayItem } from '../modules/taskFunction.js';
// eslint-disable-next-line
let arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
const toDoList = document.querySelector('.toDoList');
const taskInput = document.querySelector('.taskInput');
const addBtn = document.getElementById('addBtn');

const deleteTask = (index) => {
  arrayOfTasks = arrayOfTasks.filter((task) => task.index !== index);
  arrayOfTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayItem();
};

// event listeners
document.addEventListener('DOMContentLoaded', displayItem);
addBtn.addEventListener('click', addItem);

export {
  taskInput, toDoList, arrayOfTasks, deleteTask,
};