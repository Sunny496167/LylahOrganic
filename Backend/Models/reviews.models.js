const mongoose = require("mongoose");
const Product = require("./products.models");

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.index({ product: 1, user: 1 }, { unique: true });

// ⏱️ Static method to update average rating and number of reviews
reviewSchema.statics.updateProductStats = async function (productId) {
  const result = await this.aggregate([
    { $match: { product: productId } },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
        numReviews: { $sum: 1 },
      },
    },
  ]);

  const stats = result[0] || { averageRating: 0, numReviews: 0 };

  await Product.findByIdAndUpdate(productId, {
    averageRating: stats.averageRating,
    numReviews: stats.numReviews,
  });
};

// 🔁 Recalculate after create/update/delete
reviewSchema.post("save", async function () {
  await this.constructor.updateProductStats(this.product);
});
reviewSchema.post("findOneAndUpdate", async function (doc) {
  if (doc) await doc.constructor.updateProductStats(doc.product);
});
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) await doc.constructor.updateProductStats(doc.product);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
