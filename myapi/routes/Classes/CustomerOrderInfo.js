class CustomersOrderInfo {
    constructor(orderId, productId, dealerId, price, quantity, addressId) {
      this.orderId = orderId;
      this.productId = productId;
      this.dealerId = dealerId;
      this.price = price;
      this.quantity = quantity;
      this.addressId = addressId;
    }
  }
  module.exports = {CustomersOrderInfo};