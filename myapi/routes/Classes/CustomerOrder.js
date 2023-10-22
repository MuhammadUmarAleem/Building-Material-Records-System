class CustomersOrder {
    constructor(userId, orderDate, paymentStatusId) {
      this.orderId = null;
      this.userId = userId;
      this.orderDate = orderDate;
      this.paymentStatusId = paymentStatusId;
    }
  }
  module.exports = {CustomersOrder};