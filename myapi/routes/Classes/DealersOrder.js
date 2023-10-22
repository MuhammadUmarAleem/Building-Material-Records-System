class DealersOrder {
    constructor(UserId, OrderDate, PaymantStatusID) {
      this.OrderId = null;
      this.UserId = UserId;
      this.OrderDate = OrderDate;
      this.PaymantStatusID = PaymantStatusID;
    }
  }
  module.exports = {DealersOrder};