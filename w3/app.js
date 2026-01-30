console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderHandler from "./order-handler.js";

// Reference to main form element
const orderForm = document.getElementById('order-form');

// Reference to order summary
const orderSummaryInfo =
  document.getElementById('order-summary-info') ||
  document.getElementById('order-summary');


// Converts true/false to Yes/No
const giftWrappingRequest = function (formData) {
    if (formData.giftwrap) {
        return "Yes";
    } else {
        return "No";
    }
};

// Handles form submission event
const handleOrderSubmit = function (event) {
    event.preventDefault();

    const formData = orderHandler.getOrderInputs();

    const message = `Ordered ${formData.qty} ${formData.size} T-Shirt(s). You requested giftwrapping: ${giftWrappingRequest(formData)}`;

    orderSummaryInfo.textContent = message;
    console.log(message);
};

// Initiates function
const init = function () {
    console.log("App Initialized");
    orderForm.addEventListener('submit', handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);