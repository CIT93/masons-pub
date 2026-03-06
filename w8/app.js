console.log("Hello from app.js! Your JavaScript is connected and running!");

import * as orderList from "./order-list.js";
import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';

// Reference to main form element
const orderForm = document.getElementById("order-form");

// Step 3: Array to store orders
const orders = [];

// Handles form submission event
const handleOrderSubmit = function (event) {
  event.preventDefault();

  const orderData = orderHandler.getOrderInputs();
  const calculatedPrice = priceCalculator.calculateTotal(orderData);

  const newOrder = {
    id: Date.now().toString(),
    ...orderData,
    ...calculatedPrice,
    timestamp: new Date().toISOString(),
  };

  orders.push(newOrder);
  orderStorage.saveOrders(orders);

  orderList.renderOrders(orders);

  console.log(orders);
};

// Initializes function
const init = function () {
  console.log("App Initialized");
  
  const loadedOrders = orderStorage.loadOrders();

  if (loadedOrders.length > 0) {
    orders.push(...loadedOrders);
    console.log("Orders loaded");
    orderList.renderOrders(orders);
  }

  orderForm.addEventListener("submit", handleOrderSubmit);
};

document.addEventListener("DOMContentLoaded", init);
