const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const receiptSchema = mongoose.Schema({
  receipt_number: {
    type: String,
    required: true,
    trim: true,
  },
  tin: {
    type: Number,
    required: false,
    trim: true,
  },
  buyers_name: {
    type: String,
    required: false,
    trim: true,
  },
  amount: {
    type: String,
    required: true,
    trim: true,
  },
  receipt_items: {
    type: Array,
    items: [
      {
        item_name: String,
        item_price: Number,
      },
    ],
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
});

receiptSchema.plugin(toJSON);
receiptSchema.plugin(paginate);

/**
 * @typedef Receipt
 */

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
