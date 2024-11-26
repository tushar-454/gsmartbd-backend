const { model, Schema } = require('mongoose');

const commentSchema = new Schema(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Blog',
    },
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'deleted'],
      default: 'active',
    },
  },
  { timestamps: true }
);

module.exports = model('Comment', commentSchema);
