const removeTask = (arr, index) => {
  const updatedTaskArray = [...arr];
  updatedTaskArray.splice(index, 1);
  return updatedTaskArray;
};

const removeTask2 = (index) => {
  const arrayOfTasksTest = JSON.parse(localStorage.getItem('arrayOfTasksTest')) || [];
  const toDoList = document.querySelector('.toDoList');
  arrayOfTasksTest.splice(index, 1);
  arrayOfTasksTest.forEach((value, i) => {
    value.index = i + 1;
  });
  toDoList.innerHTML = '';
  localStorage.setItem('arrayOfTasksTest', JSON.stringify(arrayOfTasksTest));
};

export { removeTask, removeTask2 };
