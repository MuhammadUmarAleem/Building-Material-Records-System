class CustomersOrderPayment {
    constructor(customersOrderId, paymentDate, amount, accountNo, cvc, month, year) {
      this.paymentId = null;
      this.customersOrderId = customersOrderId;
      this.paymentDate = paymentDate;
      this.amount = amount;
      this.accountNo = accountNo;
      this.cvc = cvc;
      this.month = month;
      this.year = year;
    }
  }
  module.exports = {CustomersOrderPayment};