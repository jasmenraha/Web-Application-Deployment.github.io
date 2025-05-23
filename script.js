let items = JSON.parse(localStorage.getItem('items')) || [];

function renderItems() {
  const list = document.getElementById('itemList');
  list.innerHTML = '';
  items.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item}
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </li>
    `;
  });
}

function addItem() {
  const input = document.getElementById('itemInput');
  if (input.value.trim() !== '') {
    items.push(input.value);
    input.value = '';
    saveItems();
    renderItems();
  }
}

function editItem(index) {
  const newValue = prompt("Edit item:", items[index]);
  if (newValue !== null && newValue.trim() !== '') {
    items[index] = newValue;
    saveItems();
    renderItems();
  }
}

function deleteItem(index) {
  if (confirm("Are you sure you want to delete this item?")) {
    items.splice(index, 1);
    saveItems();
    renderItems();
  }
}

function saveItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

renderItems();
