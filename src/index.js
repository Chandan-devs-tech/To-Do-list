import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

let arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
const toDoList = document.querySelector('.toDoList');
const taskInput = document.querySelector('.taskInput');
const addBtn = document.getElementById('addBtn');

const displayItem = () => {
  arrayOfTasks.forEach((todo) => {
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
      localStorage.setItem('arrayOfTasks', JSON.stringify());
      localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
    });
    //   appending checkbox and text input to the div
    divElement.appendChild(inputElement);
    divElement.appendChild(inputTextElement);
    //   creating icon
    const iElement = document.createElement('i');
    iElement.classList.add('fa-solid');
    iElement.classList.add('fa-ellipsis-vertical');
    // event listener for three dot
    iElement.addEventListener('click', () => {
      iElement.classList.toggle('fa-solid');
      iElement.classList.toggle('fa-ellipsis-vertical');
      iElement.classList.toggle('fa-trash-can');
      iElement.classList.toggle('fa-regular');
      //   event listener for delete item
      iElement.addEventListener('click', () => {
        const item = iElement.parentElement;
        const itemId = item.getAttribute('data-id');
        arrayOfTasks = arrayOfTasks.filter((task) => task.index !== parseInt(itemId, 10));
        toDoList.removeChild(item);
        arrayOfTasks.forEach((obj, index) => {
          if (obj.index > parseInt(itemId, 10)) {
            obj.index = index + 1;
          }
        });
        localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
      });
    });

    //   buttonElement.appendChild(iElement);

    div.appendChild(divElement);
    div.appendChild(iElement);
    toDoList.appendChild(div);
    taskInput.value = '';
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
};

const addItem = () => {
  if (taskInput.value !== '') {
    const task = {
      description: taskInput.value,
      completed: false,
      index: arrayOfTasks.length + 1,
    };
    toDoList.innerHTML = '';
    arrayOfTasks.push(task);
    displayItem();
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  }
};

// event listeners
document.addEventListener('DOMContentLoaded', displayItem);
addBtn.addEventListener('click', addItem);
