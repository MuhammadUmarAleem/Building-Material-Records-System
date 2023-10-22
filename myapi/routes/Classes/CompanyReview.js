  
class CompanyReviews {
  constructor( ProductId, Review, CreatedOn, UserId) {
    this.ProductReviewsId = null;
    this.ProductId = ProductId;
    this.Review = Review;
    this.CreatedOn = CreatedOn;
    this.UserId = UserId;
  }
}
module.exports = {CompanyReviews};
