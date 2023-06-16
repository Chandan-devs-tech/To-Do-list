import {
  editDescription,
  editDescription2,
} from '../src/mockFunctions/editTask.js';
import updateStatus from '../src/mockFunctions/completedStatus.js';
import clearAll from '../src/mockFunctions/clearAll.js';

describe('Edit function', () => {
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
  const oldDescription = arr[1].description;
  const newDescription = 'This is a description';
  test('This function is editing', () => {
    const updatedArr = editDescription(arr[1], newDescription, arr);
    expect(updatedArr[1].description).toBe(newDescription);
    expect(updatedArr[1]).not.toBe(oldDescription);
  });

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

  test('Editing the DOM', () => {
    editDescription2(newDescription);
    const editItem = document.querySelector('.toDoList').children.innerHTML;
    expect(editItem).toBe(newDescription);
    expect(editItem).not.toBe(oldDescription);
  });
});

describe('updateStatus function', () => {
  test('updating the status', () => {
    const updatedTask = updateStatus();
    expect(updatedTask).toBeTruthy();
  });
});

describe('Clear all function', () => {
  test('Clearing the completed task', () => {
    const clearItems = clearAll();
    expect(clearItems).toHaveLength(3);
  });
});