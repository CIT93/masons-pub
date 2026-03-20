const shirtPrice = 15;
const giftWrapPrice = 2;

export function calculateTotal(orderData) {
  let total = orderData.qty * shirtPrice;

  if (orderData.giftwrap) {
    total += giftWrapPrice;
  }

  return { totalPrice: total };
}
