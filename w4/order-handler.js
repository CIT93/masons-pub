// Select elements from the form
const qtyInput = document.getElementById("qty");
const giftWrapCheckbox = document.getElementById("gift-wrap");
const sizeRadios = document.querySelectorAll('input[name="size"]');

// Helper function to get selected radio value
const getSelectedSize = function (radioButtons) {
  for (const radio of radioButtons) {
    if (radio.checked) {
      return radio.value;
    }
  }
};

// Export main function
export const getOrderInputs = function () {
  return {
    qty: parseInt(qtyInput.value),
    size: getSelectedSize(sizeRadios),
    giftwrap: giftWrapCheckbox.checked,
  };
};
