class Tasklist {
  constructor() {
    this.listOfTasks = JSON.parse(localStorage.getItem('listOfTasks')) || [];
    this.taskInput = document.querySelector('.taskInput');
    this.refreshBtn = document.getElementById('refreshBtn');
    this.addBtn = document.getElementById('addBtn');
    this.clearBtn = document.getElementById('clearBtn');
    this.toDoList = document.querySelector('.toDoList');
  }
}

export default Tasklist;
