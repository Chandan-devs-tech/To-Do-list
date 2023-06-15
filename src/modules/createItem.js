// eslint-disable-next-line
import { arrayOfTasks, clearItem, deleteTask } from "./addItem.js";
import checker from './checker.js';
import createIcon from './createIcon.js';

const clearAllBtn = document.querySelector('.clearList');

// createElement function
const createElement = (todo) => {
  const div = document.createElement('div');
  div.classList.add('listItem');
  const attr = document.createAttribute('data-id');
  attr.value = todo.index;
  div.setAttributeNode(attr);
  //   creating div for checkbox and input
  const divElement = document.createElement('div');
  divElement.className = 'checkText';
  //   creating text input
  const inputTextElement = document.createElement('input');
  inputTextElement.classList.add('toDoText');
  inputTextElement.type = 'text';
  inputTextElement.value = todo.description;
  // event listener for edit
  inputTextElement.addEventListener('blur', () => {
    const newInputValue = inputTextElement.value;
    todo.description = newInputValue;
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  });
  // creating checkbox
  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = 'myCheckbox';
  //   checkbox event listener
  inputElement.addEventListener('change', () => {
    checker(inputTextElement, inputElement, div, todo, arrayOfTasks);
  });
  if (todo.completed) {
    inputTextElement.classList.toggle('lineThrough');
    div.classList.toggle('completed');
    inputElement.checked = true;
  }
  //    clear all event listener
  clearAllBtn.addEventListener('click', clearItem);
  //   appending checkbox and text input to the div
  divElement.appendChild(inputElement);
  divElement.appendChild(inputTextElement);
  // create icon function called
  const icon = createIcon('fa-trash-can');
  // add event listener delete icon
  icon.addEventListener('click', () => deleteTask(todo.index));
  //   buttonElement.appendChild(iElement);
  div.appendChild(divElement);
  div.appendChild(icon);
  return div;
};

export default createElement;
