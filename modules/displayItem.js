import Tasklist from './tasklist.js';

const displayItem = (listOfTasks) => {
  const tasklist = new Tasklist();
  listOfTasks.forEach((todo) => {
    const div = document.createElement('div');
    div.classList.add('listItem');
    const attr = document.createAttribute('data-id');
    attr.value = todo.id;
    div.setAttributeNode(attr);

    const divElement = document.createElement('div');
    divElement.className = 'checkText';
    const inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.id = 'myCheckbox';
    const inputTextElement = document.createElement('input');
    inputTextElement.classList.add('toDoText');
    inputTextElement.type = 'text';
    inputTextElement.value = `${todo.description}`;
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
    tasklist.toDoList.appendChild(div);
  });
};

export default displayItem;
