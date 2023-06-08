import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const arrayOfTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [
  { description: ' Cleaning', completed: false, index: 1 },
  { description: 'Reading', completed: false, index: 2 },
  { description: 'Walking', completed: false, index: 3 },
];
const toDoList = document.querySelector('.toDoList');

const displayItem = () => {
  arrayOfTasks.forEach((todo) => {
    const div = document.createElement('div');
    div.classList.add('listItem');
    const attr = document.createAttribute('data-id');
    attr.value = todo.index;
    div.setAttributeNode(attr);

    const divElement = document.createElement('div');
    divElement.className = 'checkText';
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'myCheckbox';
    const inputTextElement = document.createElement('input');
    inputTextElement.classList.add('toDoText');
    inputTextElement.type = 'text';
    inputTextElement.value = todo.description;
    divElement.appendChild(inputElement);
    divElement.appendChild(inputTextElement);
    const buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'btn';
    const iElement = document.createElement('i');
    iElement.className = 'fa-solid fa-ellipsis-vertical';
    buttonElement.appendChild(iElement);
    div.appendChild(divElement);
    div.appendChild(buttonElement);
    toDoList.appendChild(div);
  });
  localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
};

document.addEventListener('DOMContentLoaded', displayItem);