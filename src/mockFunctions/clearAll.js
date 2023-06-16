const array = [
  { description: 'Task number 1', completed: true, index: 1 },
  { description: 'Task number 2', completed: false, index: 2 },
  { description: 'Task number 3', completed: true, index: 3 },
  { description: 'Task number 4', completed: false, index: 4 },
  { description: 'Task number 5', completed: false, index: 5 },
];

const clearAll = () => array.filter((task) => !task.completed);

export default clearAll;