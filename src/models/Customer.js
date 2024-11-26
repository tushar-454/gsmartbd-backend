const { model, Schema } = require('mongoose');

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    varifiedEmail: {
      type: Boolean,
      required: true,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'disabled', 'deleted'],
      default: 'active',
    },
    address: {
      type: {
        address1: { type: String, required: true },
        address2: { type: String },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        zip: { type: String, required: true },
        type: {
          type: String,
          required: true,
          enum: ['default', 'shipping', 'billing'],
        },
      },
      required: true,
    },
    lastOrderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    orderCount: {
      type: Number,
      required: true,
      default: 0,
    },
    tags: {
      type: [String],
    },
    notes: {
      type: [String],
    },
    totalSpent: {
      type: Number,
      required: true,
      default: 0,
    },
    points: {
      type: Number,
      required: true,
      default: 0,
    },
    pointsAmount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = model('Customer', customerSchema);
