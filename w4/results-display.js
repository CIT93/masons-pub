// References output section
const orderSummary = document.getElementById("order-summary");

const displayTotal = document.getElementById("display-total");
const displayQty = document.getElementById("display-qty");
const displaySize = document.getElementById("display-size");
const displayGift = document.getElementById("display-gift");

// Export display function
export function showOrderResults(order) {
  orderSummary.style.display = "block";

  displayTotal.textContent = order.totalPrice;
  displayQty.textContent = order.qty;
  displaySize.textContent = order.size;
  displayGift.textContent = order.giftwrap ? "Yes" : "No";
}

