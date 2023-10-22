class DealerRating {
    constructor(productId, rate, ratingOn, from, to) {
      this.ratingId = null;
      this.productId = productId;
      this.rate = rate;
      this.ratingOn = ratingOn;
      this.from = from;
      this.to = to;
    }
  }
  module.exports = {DealerRating};