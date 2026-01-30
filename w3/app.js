console.log('Hello from app.js! Your JavaScript is connected and running!');

// Import everything
import * as orderHandler from './order-handler.js';

// Select elements
const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

// Submit handler
const handleOrderSubmit = function (event) {
  event.preventDefault();

  const orderData = orderHandler.getOrderInputs();

  orderSummary.textContent = `Ordered ${orderData.qty} ${orderData.size} T-Shirt(s). Gift Wrap: ${orderData.giftWrap}`;
};

// Initiate function
const init = function () {
  console.log('App Initialized');
  orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);
