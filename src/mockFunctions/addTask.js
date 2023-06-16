const addTask = (arr, newTask) => {
  const updatedTaskArray = [...arr];
  updatedTaskArray.push(newTask);
  return updatedTaskArray;
};

const addTask2 = () => {
  const arrayOfTasksTest = JSON.parse(localStorage.getItem('arrayOfTasksTest')) || [];
  const taskInput = document.querySelector('.taskInput');
  const toDoList = document.querySelector('.toDoList');
  const newTask = {
    description: taskInput.value,
    completed: false,
    index: arrayOfTasksTest.length + 1,
  };
  if (taskInput.value) {
    arrayOfTasksTest.push(newTask);
    localStorage.setItem('arrayOfTasksTest', JSON.stringify(arrayOfTasksTest));
  }
  toDoList.innerHTML = '';
  toDoList.innerHTML = `
  <div class="listItem" data-id="todo.index">
  <div class="checkText">
    <input class="toDoText" type="text" value="todo.description">
  </div>
  <input type="checkbox" id="myCheckbox">
</div>
`;
  return newTask;
};

export { addTask, addTask2 };
