const task = {
  description: 'cleaning',
  completed: false,
  index: 1,
};

const updateStatus = () => {
  task.completed = true;
  return task.completed;
};

export default updateStatus;
