const tbody = document.getElementById("order-table-body");

export function renderOrders(orders) {
  tbody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${new Date(order.date).toLocaleString()}</td>
      <td>${order.qty}</td>
      <td>${order.size}</td>
      <td>$${order.total}</td>
      <td></td>
    `;

    tbody.appendChild(row);
  });
}