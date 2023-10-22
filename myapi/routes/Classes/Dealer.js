// Dealer.js
class Dealer {
    constructor(
      firstName,
      lastName,
      userId
    ) {
      this.dealerId = null;
      this.firstName = firstName;
      this.lastName = lastName;
      this.picture = null;
      this.productsAndServices = null;
      this.contact = null;
      this.userId = userId;
      this.addressId = null;
      this.accountId = null;
    }
  }
  
  module.exports = {Dealer};