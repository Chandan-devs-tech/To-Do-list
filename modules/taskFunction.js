import createIcon from './fontAwesome.js';
// eslint-disable-next-line
import {
  taskInput, toDoList, arrayOfTasks, deleteTask,
} from '../src/index.js';

const createElement = (todo) => {
  const div = document.createElement('div');
  div.classList.add('listItem');
  const attr = document.createAttribute('data-id');
  attr.value = todo.index;
  div.setAttributeNode(attr);
  //   creating div for checkbox and input
  const divElement = document.createElement('div');
  divElement.className = 'checkText';
  // creating checkbox
  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = 'myCheckbox';
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
  //   appending checkbox and text input to the div
  divElement.appendChild(inputElement);
  divElement.appendChild(inputTextElement);
  // create icon function called
  const icon = createIcon('fa-trash-can');
  // add event listener delete icon
  icon.addEventListener('click', () => {
    deleteTask(todo.index);
  });
  //   buttonElement.appendChild(iElement);
  div.appendChild(divElement);
  div.appendChild(icon);
  return div;
};

export const displayItem = () => {
  toDoList.innerHTML = '';
  arrayOfTasks.forEach((todo) => {
    const element = createElement(todo);
    toDoList.appendChild(element);
  });
  taskInput.value = '';
};

export const addItem = () => {
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

export { createElement };
