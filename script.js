// Initial products array
const initialProducts = [
  {
    name: 'Laptop',
    quantity: 10,
    price: 800,
    vendor: 'Dell',
    category: 'Electronics',
  },
  {
    name: 'Phone',
    quantity: 25,
    price: 500,
    vendor: 'Samsung',
    category: 'Electronics',
  },
  {
    name: 'Desk Chair',
    quantity: 15,
    price: 150,
    vendor: 'Ikea',
    category: 'Furniture',
  },
  {
    name: 'MacBook Air',
    quantity: 5,
    price: 7500,
    vendor: 'Apple',
    category: 'Electronics',
  },

  {
    name: 'Magic mouse',
    quantity: 15,
    price: 1485,
    vendor: 'Apple',
    category: 'Accessories',
  },
];

let inventoryList = [...initialProducts];

// product Inventory list fetch

function getNewProductInInventory(event) {

  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productQuantity = document.getElementById('productQuantity').value;
  const productPrice = document.getElementById('productPrice').value;
  const productVendor = document.getElementById('productVendor').value;
  const productCategory = document.getElementById('productCategory').value;

  const newlyAddedProduct = {
    name: productName,
    price: parseFloat(productPrice),
    quantity: parseInt(productQuantity),
    vendor: productVendor,
    category: productCategory,

  }
  inventoryList.push(newlyAddedProduct);

  document.getElementById('productForm').reset();

  renderProducts();

}

// amend in product list....
function amendInventoryList(index) {
  const modifiedProduct = inventoryList[index];

  document.getElementById('productName').value = modifiedProduct.name;
  document.getElementById('productQuantity').value = parseInt(modifiedProduct.quantity);
  document.getElementById('productPrice').value = parseFloat(modifiedProduct.price);
  document.getElementById('productVendor').value = modifiedProduct.vendor;
  document.getElementById('productCategory').value = modifiedProduct.category;
  document.getElementById('productId').value = index;

  // renderProducts(inventoryList);

}

// store the amended value of inventory...
function saveModifiedProduct() {
  const index = document.getElementById('productId').value;
  inventoryList[index].name = document.getElementById('productName').value;
  inventoryList[index].quantity = parseInt(document.getElementById('productQuantity').value);
  inventoryList[index].price = parseFloat(document.getElementById('productPrice').value);
  inventoryList[index].vendor = document.getElementById('productVendor').value;
  inventoryList[index].category = document.getElementById('productCategory').value;

  renderProducts();
  document.getElementById('productForm').reset();
  document.getElementById('productId').value = '';

}

// remove product from inventory...

function deleteProduct(index) {
  // const productDelete = inventoryList[index];
  alert('are you sure to delete?')
  inventoryList.splice(index, 1);
  renderProducts();

}


// Function to render products
function renderProducts() {
  const productInventoryList = document.getElementById('productTableBody');
  productInventoryList.innerHTML = '';

  inventoryList.forEach(function (products, index) {
    const newProductInTable = document.createElement('tr');

    newProductInTable.innerHTML =

      `
      <td class="text-center border-2 py-4 m-4 bg-green-600">${products.name}</td>
      <td class="text-center border-2 py-4 m-4 bg-rose-700">${products.quantity}</td>
      <td class="text-center border-2 py-4 m-4 bg-cyan-500">${products.price}</td>
      <td class="text-center border-2 py-4 m-4 bg-amber-500">${products.vendor}</td>
      <td class="text-center border-2 py-4 m-4 bg-violet-500">${products.category}</td>
      <td class="text-center py-2 border-2 m-2">
      <button onclick="amendInventoryList(${index})" class="bg-green-500 text-white p-2 rounded">Edit</button>
      <button onclick="deleteProduct(${index})" class="bg-red-500 text-white p-1 px-3 rounded">Delete</button>
      </td>
      `;
    productInventoryList.appendChild(newProductInTable)
  });

}
document.getElementById('productForm').addEventListener('submit', getNewProductInInventory);


renderProducts();

