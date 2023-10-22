class DealerReviews {
    constructor( productId, review, createdOn, from, to) {
      this.productReviewsId = null;
      this.productId = productId;
      this.review = review;
      this.createdOn = createdOn;
      this.from = from;
      this.to = to;
    }
  }
  module.exports = {DealerReviews};