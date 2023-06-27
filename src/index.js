import './styles/style.scss';

import App from './app';

// Код для першого списку
const addButton1 = document.querySelector('#addButton1');
const addInput1 = document.querySelector('#addInput1');
const listEl1 = document.querySelector('#list1');
const app1 = new App(addButton1, addInput1, listEl1);

addButton1.addEventListener('click', () => {
  app1.addItem(addInput1.value.trim());
  addInput1.value = '';
});

// Код для другого списку
const addButton2 = document.querySelector('#addButton2');
const addInput2 = document.querySelector('#addInput2');
const listEl2 = document.querySelector('#list2');
const app2 = new App(addButton2, addInput2, listEl2);

addButton2.addEventListener('click', () => {
  app2.addItem(addInput2.value.trim());
  addInput2.value = '';
});

// Код для третього списку
const addButton3 = document.querySelector('#addButton3');
const addInput3 = document.querySelector('#addInput3');
const listEl3 = document.querySelector('#list3');
const app3 = new App(addButton3, addInput3, listEl3);

addButton3.addEventListener('click', () => {
  app3.addItem(addInput3.value.trim());
  addInput3.value = '';
});