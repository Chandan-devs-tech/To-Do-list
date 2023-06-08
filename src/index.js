import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Tasklist from '../modules/tasklist.js';
import addItem from '../modules/addItem.js';
import displayItem from '../modules/displayItem.js';

class App {
  constructor() {
    this.myTasklist = new Tasklist();
    this.myTasklist.addBtn.addEventListener('click', this.myAddItem.bind(this));
  }

  myDisplayItem() {
    displayItem(this.myTasklist.listOfTasks);
  }

  myAddItem() {
    addItem(this.myTasklist.listOfTasks);
  }
}

const app = new App();
app.myDisplayItem();
