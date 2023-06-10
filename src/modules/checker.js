// checker function
const checker = (input, checkbox, element, task) => {
  if (checkbox.checked) {
    input.classList.toggle('lineThrough');
    element.classList.toggle('completed');
    task.completed = true;
  } else {
    input.classList.toggle('lineThrough');
    element.classList.toggle('completed');
    task.completed = false;
  }
};

export default checker;