export default class App {
  #items = [];
  

  
  constructor(addButton, addInput, listEl) {
    this.addButton = addButton;
    this.addInput = addInput;
    this.listEl = listEl;

    this.#bindEvents();
    this.load();
  }


    #bindEvents() {
       this.addButton.addEventListener('click', () => {
         this.addItem(this.addInput.value.trim());
         this.addInput.value = '';
       });
      this.listEl.addEventListener('click', event => {
        if (event.target.dataset.removeItem) {
          this.removeItem(event.target.dataset.removeItem)
        }
      });

      this.listEl.addEventListener('change', event => {
        if (event.target.dataset.itemId) {
          if (event.target.checked) {
            this.markItemAsChecked(event.target.dataset.itemId);
          } else {
            this.markItemAsUnchecked(event.target.dataset.itemId);
          }
        }
      });
  }
  

  addItem(item) {
    if (!item) {
      return;
    }

    if (typeof item === 'string') {
        item = {
          id: Date.now(),
          completed: false,
      content: item
    }
    }

   
    this.#items.push(item);
    let element = this.createElForItem(item);
    
    this.listEl.append(element);

    this.save();
  }


  removeItem(id) {
    
    if (typeof id === 'string') {
      id = Number(id);
    }
    
    let itemIndex = this.#items.findIndex(i => i.id === id);
    if (itemIndex >= 0) {
      this.#items.splice(itemIndex, 1);
    }
    
    

    let itemEl = document.querySelector(`[data-item-id = "${id}"]`);
    if (itemEl) {
      itemEl.remove();
    }
    
    this.save();

  }

  markItemAsChecked(id) {
    if (typeof id === 'string') {
      id = Number(id);
    }
    
    let item = this.#items.find(i => i.id === id);
    if (item) {
      item.completed = true;
      let itemEl = document.querySelector(`[data-item-id = "${id}"]`);
    if (itemEl) {
      itemEl.classList.add('item_done');
    }
    }
    
    
    this.save();
    
  }

  markItemAsUnchecked(id) {
 if (typeof id === 'string') {
      id = Number(id);
    }
    
    let item = this.#items.find(i => i.id === id);
    if (item) {
      item.completed = false;
      let itemEl = document.querySelector(`[data-item-id = "${id}"]`);
    if (itemEl) {
      itemEl.classList.remove('item_done');
    }
    }

    this.save();
  }


  save() {
    let data = JSON.stringify(this.#items);
    
    localStorage.setItem('items', data);
  }

  load() {
    
    
    try {
      let data = localStorage.getItem('items');
      let items = JSON.parse(data);
      items.forEach(i => this.addItem(i));
    } catch (e) {
      console.error('Error');
    }
    
    

    
    
   
  }

  createElForItem(item) {

    let element = document.createElement('div');
    element.classList.add('item');
    element.dataset.itemId = item.id;

    if (item.completed) {
      element.classList.add('item_done');
    }

    element.innerHTML = `
        <input type="checkbox" class="item-checkbox" data-item-id="${item.id}" ${item.completed ? 'checked' : ''}>
        <div class="item-content">${item.content}</div>
        <button type="button" class="item-remove-button" data-remove-item="${item.id}">&times;</button>
        `;
    return element;

  }
  
  
  
}

