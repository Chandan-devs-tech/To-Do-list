// eslint-disable-next-line
import createElement from './createItem.js';

// eslint-disable-next-line
export let arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
// import displayItem from "./displayItem.js";
export const taskInput = document.querySelector('.taskInput');
const toDoList = document.querySelector('.toDoList');

// displayItem function
const displayItem = () => {
  toDoList.innerHTML = '';
  arrayOfTasks.forEach((todo) => {
    const element = createElement(todo);
    toDoList.appendChild(element);
  });
  taskInput.value = '';
};

// addItem function
const addItem = () => {
  if (taskInput.value !== '') {
    const task = {
      description: taskInput.value,
      completed: false,
      index: arrayOfTasks.length + 1,
    };
    arrayOfTasks.push(task);
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    displayItem();
  }
};

// deleteTask function
const deleteTask = (index) => {
  arrayOfTasks = arrayOfTasks.filter((task) => task.index !== index);
  arrayOfTasks = arrayOfTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayItem();
};

// clearItem function
const clearItem = () => {
  arrayOfTasks = arrayOfTasks.filter((clear) => clear.completed === false);
  arrayOfTasks = arrayOfTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  displayItem();
};

export {
  addItem, deleteTask, clearItem, displayItem,
};
