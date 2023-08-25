// const httpStatus = require('http-status');
const { Receipt } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a new Receipt
 * @param {Object} receiptBody
 * @returns {Promise<Receipt>}
 */

const createReceipt = async (receiptBody) => {
  return Receipt.create(receiptBody);
};

const queryReceipts = async (filter, options) => {
  const receipts = await Receipt.paginate(filter, options);
  return receipts;
};

module.exports = {
  createReceipt,
  queryReceipts,
};
