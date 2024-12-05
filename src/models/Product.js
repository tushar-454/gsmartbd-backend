const { model, Schema } = require('mongoose');

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    htmlBody: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'ownerType',
    },
    ownerModel: {
      type: String,
      required: true,
      enum: ['Merchant', 'Admin'],
    },
    categories: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['draft', 'requested', 'published', 'unpublished'],
    },
    publishedAt: {
      type: Date,
    },
    images: {
      type: [String],
      required: true,
    },
    varients: {
      type: [
        {
          option: {
            type: String,
            required: true,
          },
          value: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          merchantPrice: {
            type: Number,
            required: true,
          },
          inventoryQuantity: {
            type: Number,
            required: true,
          },
          sku: {
            type: String,
          },
          barcode: {
            type: String,
          },
          weight: {
            type: Number,
          },
        },
      ],
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    coupon: {
      type: Schema.Types.ObjectId,
      ref: 'Coupon',
    },
    discount: {
      type: [String],
      required: true,
    },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // merchantPrice: {
    //   type: Number,
    //   required: true,
    // },
    slug: {
      type: String,
      required: true,
    },
    theme: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);
module.exports = Product;
