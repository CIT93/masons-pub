const LOCAL_STORAGE_KEY = "order_data";

// Save orders array to localStorage
export function saveOrders(orders) {
  try {
    const ordersString = JSON.stringify(orders);
    localStorage.setItem(LOCAL_STORAGE_KEY, ordersString);
  } catch (error) {
    console.error("Error saving orders:", error);
  }
}

// Load orders array from localStorage
export function loadOrders() {
  const storedOrders = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (storedOrders) {
    return JSON.parse(storedOrders);
  }

  return [];
}