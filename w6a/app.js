console.log("Hello from app.js! Your JavaScript is connected and running!");

import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';

// Reference to main form element
const orderForm = document.getElementById("order-form");

// Reference to order summary
const orderSummaryInfo =
  document.getElementById("order-summary-info") ||
  document.getElementById("order-summary");

// Step 3: Array to store orders
const orders = [];

// Handles form submission event
const handleOrderSubmit = function (event) {
  event.preventDefault();

  const orderData = orderHandler.getOrderInputs();
  const calculatedPrice = priceCalculator.calculateTotal(orderData);

  const newOrder = {
    ...orderData,
    ...calculatedPrice,
    timestamp: new Date().toISOString(),
  };

  orders.push(newOrder);

  resultsDisplay.showOrderResults(newOrder);

  console.log(orders);
};

// Initializes function
const init = function () {
  console.log("App Initialized");
  
  const loadedOrders = orderStorage.loadOrders();
  console.log("Loaded orders:", loadedOrders);

  if (loadedOrders.length > 0) {
    orders.push(...loadedOrders);

  }

  orderForm.addEventListener("submit", handleOrderSubmit);
};

document.addEventListener("DOMContentLoaded", init);
