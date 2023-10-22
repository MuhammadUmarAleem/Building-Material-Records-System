// Companies.js
class Companies {
    constructor(
      companyName,
      ownerName,
      addressId,
      companyTypeId,
      userId
    ) {
      this.companyId = null;
      this.companyMission = null;
      this.companyHistory = null;
      this.productsAndServices = null;
      this.companyName = companyName;
      this.picture = null;
      this.companyContact = null;
      this.ownerName = ownerName;
      this.addressId = addressId;
      this.companyTypeId = companyTypeId;
      this.userId = userId;
      this.accountId = null;
    }
  }
  
  module.exports = {Companies};