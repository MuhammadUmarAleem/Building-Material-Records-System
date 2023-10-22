class Stock {
    constructor(ProductId, UserId, Quantity, UnitPrice, ReorderLevel, LastOrderDate, LastOrderQuantity, StatusId) {
      this.StockId = null;
      this.ProductId = ProductId;
      this.UserId = UserId;
      this.Quantity = Quantity;
      this.UnitPrice = UnitPrice;
      this.ReorderLevel = ReorderLevel;
      this.LastOrderDate = LastOrderDate;
      this.LastOrderQuantity = LastOrderQuantity;
      this.StatusId = StatusId;
    }
  }
  module.exports = {Stock};
  