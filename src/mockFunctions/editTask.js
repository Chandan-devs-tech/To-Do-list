const editDescription = (task, newDescription, array) => {
  task.description = newDescription;
  localStorage.setItem('arrayOfTaskTest', JSON.stringify(array));
  return array;
};

const editDescription2 = (newDescription) => {
  const editInput = document.querySelector('.toDoList');
  editInput.children.innerHTML = newDescription;
};
export { editDescription, editDescription2 };
