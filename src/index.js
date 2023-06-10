import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

// fetching containers
import { displayItem, addItem } from './modules/addItem.js';

const addBtn = document.getElementById('addBtn');

// event listeners
document.addEventListener('DOMContentLoaded', displayItem);
addBtn.addEventListener('click', addItem);
