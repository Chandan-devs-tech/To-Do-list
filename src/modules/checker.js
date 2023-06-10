// checker function
const checker = (input, checkbox, element, task, array) => {
  if (checkbox.checked) {
    input.classList.toggle("lineThrough");
    element.classList.toggle("completed");
    task.completed = true;
  } else {
    input.classList.toggle("lineThrough");
    element.classList.toggle("completed");
    task.completed = false;
  }
  localStorage.setItem("arrayOfTasks", JSON.stringify(array));
};

export default checker;
