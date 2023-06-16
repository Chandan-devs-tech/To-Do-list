import { addTask, addTask2 } from '../src/mockFunctions/addTask.js';
import { removeTask, removeTask2 } from '../src/mockFunctions/removeTask.js';

describe('deleteTask', () => {
  const arr = [
    {
      description: 'cleaning',
      completed: false,
      index: 1,
    },
    {
      description: 'reading',
      completed: false,
      index: 2,
    },
  ];

  test('The function will delete task from an array', () => {
    const updatedTaskArray = removeTask(arr, 1);
    expect(updatedTaskArray).toHaveLength(1);
    expect(updatedTaskArray).not.toContain(arr[1]);
  });

  test('Removing an item from DOM', () => {
    document.body.innerHTML = `
    <!-- Main section -->
    <section class="mainContainer">
      <!-- Header section -->
      <div class="mainHeading">
        <h1 class="heading">To Do List</h1>
      </div>
      <div class="subContainer">
        <div class="subHeading">
          <p class="subHeadingText">Today's to Do</p>
          <button type="button" class="btn" id="refreshBtn">
            <i class="fas fa-refresh recycle_icon"></i>
          </button>
        </div>
        <!-- Form section -->
        <div class="formHead">
          <div class="form">
            <input
              type="text"
              class="taskInput"
              placeholder="Add to your list..."
            />
            <button type="button" class="btn" id="addBtn">
              <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
            </button>
          </div>
        </div>
        <!-- To-Do-list section -->
        <div class="toDoList" id="toDoList"></div>
        <!-- Footer section -->
        <div class="footer">
          <button type="button" class="clearList" id="clearBtn">
            Clear All Completed
          </button>
        </div>
      </div>
    </section>`;
    removeTask2(1);
    const toDoList = document.querySelector('.toDoList');
    expect(toDoList.children).toHaveLength(0);
  });
});

describe('Add task', () => {
  const arr = [
    {
      description: 'cleaning',
      completed: false,
      index: 1,
    },
    {
      description: 'reading',
      completed: false,
      index: 2,
    },
  ];
  test('Should add new task to the array', () => {
    const newTask = {
      description: 'walking',
      completed: false,
      index: 3,
    };
    const updatedTaskArray = addTask(arr, newTask);
    expect(updatedTaskArray).toHaveLength(3);
    expect(updatedTaskArray[2]).toEqual(newTask);
  });
  test('Adding a task to DOM', () => {
    document.body.innerHTML = `
    <!-- Main section -->
    <section class="mainContainer">
      <!-- Header section -->
      <div class="mainHeading">
        <h1 class="heading">To Do List</h1>
      </div>
      <div class="subContainer">
        <div class="subHeading">
          <p class="subHeadingText">Today's to Do</p>
          <button type="button" class="btn" id="refreshBtn">
            <i class="fas fa-refresh recycle_icon"></i>
          </button>
        </div>
        <!-- Form section -->
        <div class="formHead">
          <div class="form">
            <input
              type="text"
              class="taskInput"
              placeholder="Add to your list..."
            />
            <button type="button" class="btn" id="addBtn">
              <i class="fa-sharp fa-solid fa-right-to-bracket"></i>
            </button>
          </div>
        </div>
        <!-- To-Do-list section -->
        <div class="toDoList" id="toDoList"></div>
        <!-- Footer section -->
        <div class="footer">
          <button type="button" class="clearList" id="clearBtn">
            Clear All Completed
          </button>
        </div>
      </div>
    </section>`;
    const taskInput = document.querySelector('.taskInput');
    const toDoList = document.querySelector('.toDoList');
    taskInput.value = 'Sana';
    addTask2(1);
    expect(toDoList.children).toHaveLength(1);
  });
});