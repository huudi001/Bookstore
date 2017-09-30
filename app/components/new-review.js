import Ember from 'ember';

export default Ember.Component.extend({
  addNewReviewForm: false,
  actions: {
    showNewReviewForm() {
      this.set("addNewReviewForm", true);
    },
    saveNewReview() {
      var params = {
        username: this.get("username"),
        date: this.get("date"),
        profilePicture: this.get("profilePicture"),
        rating: parseInt(this.get("rating")),
        reviewContent: this.get("reviewContent"),
        book: this.get("book")
      };
      this.set("addNewReviewForm", false);
      this.sendAction("saveNewReview", params);
      this.set("username", "");
      this.set("date", "");
      this.set("profilePicture", "");
      this.set("rating", "");
      this.set("reviewContent", "");
    }
  }
});
