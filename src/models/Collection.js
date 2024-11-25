const { model, Schema } = require('mongoose');

const collectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    ],
    status: {
      type: String,
      required: true,
      enum: ['active', 'disabled', 'deleted'],
      default: 'active',
    },
  },
  { timestamps: true }
);

module.exports = model('Collection', collectionSchema);
