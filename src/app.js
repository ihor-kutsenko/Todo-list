export default class App {
  #items = [];

  
  constructor() {
    console.log('constructor');

    this.addButton = document.querySelector('#addButton');
    this.addInput = document.querySelector('#addInput');
    this.listEl = document.querySelector('#list');

    this.#bindEvents();
  }


    #bindEvents() {
       this.addButton.addEventListener('click', () => {
         this.addItem(this.addInput.value.trim());
         this.addInput.value = '';
       });
      this.listEl.addEventListener('click', event => {
        console.log('event', event);
      } )
  }
  

  addItem(itemContent) {
    if (!itemContent) {
      return;
    }

    let item = {
      content: itemContent
    }
    this.#items.push(item);
    let element = this.createElForItem(item);
    console.log(element);
    this.listEl.append(element);
  }

  createElForItem(item) {

    let element = document.createElement('div');
    element.classList.add('item');
    element.innerHTML = `
        <input type="checkbox" class="item-checkbox" data-item-id="${item.id}" ${item.completed ? 'checked' : ''}>
        <div class="item-content">${item.content}</div>
        <button type="button" class="item-remove-button" data-remove-item="${item.id}">&times;</button>
        `;
    return element;

  }
  
  
  
}

