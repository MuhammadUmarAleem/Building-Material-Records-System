class DealersOrderPayment {
    constructor( DealersOrderId, PaymentDate, Amount, AccountNo, CVC, Month, Year) {
      this.PaymentId = null;
      this.DealersOrderId = DealersOrderId;
      this.PaymentDate = PaymentDate;
      this.Amount = Amount;
      this.AccountNo = AccountNo;
      this.CVC = CVC;
      this.Month = Month;
      this.Year = Year;
    }
  }
  module.exports = {DealersOrderPayment};