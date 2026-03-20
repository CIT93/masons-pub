let moduleCallbacks = {};

const tbody = document.getElementById("order-table-body");

const tableBody = document.getElementById('order-table-body');

tableBody.addEventListener('click', function(event) {
    const target = event.target;
    
    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    if (target.classList.contains("delete-btn") && moduleCallbacks.onDelete) {
      moduleCallbacks.onDelete(id);
    }

    if (target.classList.contains("edit-btn") && moduleCallbacks.onEdit) {
      moduleCallbacks.onEdit(id);
    }
});

  export function renderOrders(orders, callbacks) {
    moduleCallbacks = callbacks;
    tbody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${new Date(order.timestamp).toLocaleString()}</td>
      <td>${order.qty}</td>
      <td>${order.size}</td>
      <td>$${order.totalPrice ?? order.total ?? order.price ?? ""}</td>
      <td>
        <button class="edit-btn" data-id="${order.id}">Edit</button>
        <button class="delete-btn" data-id="${order.id}">Delete</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}