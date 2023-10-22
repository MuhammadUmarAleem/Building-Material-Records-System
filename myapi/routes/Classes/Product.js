class Product {
    constructor(companyId, launchedAt, productName, unit, quantity, unitPrice, productCategory, productDescription, thresholdQuantity, productPic, statusId) {
      this.companyId = companyId;
      this.launchedAt = launchedAt;
      this.productName = productName;
      this.unit = unit;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
      this.productCategory = productCategory;
      this.productDescription = productDescription;
      this.thresholdQuantity = thresholdQuantity;
      this.productPic = productPic;
      this.statusId = statusId;
    }
  }

  module.exports = {Product};