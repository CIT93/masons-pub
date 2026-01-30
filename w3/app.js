console.log('Hello from app.js! Your JavaScript is connected and running!');

// Imports all exported helpers from the form-handler module.
import * as orderForm from './order-handler.js';

// References the main carbon footprint form.
const carbonFootprintForm = document.getElementById('carbonFootprintForm');

// References the input field for the number of household members.
const householdMembersInput = carbonFootprintForm.querySelector('#householdMembers');

// References the clear form button.
const clearFormButton = document.getElementById('clearFormButton');

// --- Part 2: Code handleFormSubmit and handleClearForm Functions ---

// Handles the form submission event, preventing default page reload.
const handleFormSubmit = function (event) {
  event.preventDefault();
  console.log(event);
  // Refactor variable name to be formData which is the returned object literal
  const formData = formHandler.getFormInputs();
  // Refactor console for object literal
  console.log(`key of householdMember value of ${formData.householdMembers}`);
  console.log(`key of homeSquareFootage value of ${formData.homeSquareFootage}`);
  console.log(`key of isApartment value of ${formData.isApartment}`);
  console.log(`key of dietType value of ${formData.dietType}`);
  console.log(`key of foodPackaging value of ${formData.foodPackaging}`);
  console.log(formData);
};

// Handles the clear form button click, resetting form fields.
const handleClearForm = function () {
  formHandler.clearForm();
  //carbonFootprintForm.reset();
  //householdMembersInput.value = 1;
  console.log('Clear button clicked');
};


// Initializes the app by attaching event listeners after the DOM is ready.
  const init = function () {
  console.log('App initialized: DOM is ready! Try submitting the form or clearing it.');

  carbonFootprintForm.addEventListener('submit', handleFormSubmit);
  clearFormButton.addEventListener('click', handleClearForm);
};

// Runs init once the DOM content has fully loaded.
document.addEventListener('DOMContentLoaded', init);