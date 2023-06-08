import Tasklist from './tasklist.js';
import displayItem from './displayItem.js';

const addItem = () => {
  const tasklist = new Tasklist();
  const value1 = tasklist.taskInput.value;
  const index = new Date().getTime().toString();
  if (value1 !== '') {
    const task = {
      description: value1,
      id: index,
    };
    tasklist.toDoList.innerHTML = '';
    tasklist.listOfTasks.push(task);
    displayItem(tasklist.listOfTasks);
    localStorage.setItem('listOfTasks', JSON.stringify(tasklist.listOfTasks));
    tasklist.taskInput.value = '';
  }
};

export default addItem;
