const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { receiptService } = require('../services');

const createReceipt = catchAsync(async (req, res) => {
  const receipt = await receiptService.createReceipt(req.body);
  res.status(httpStatus.CREATED).send(receipt);
});

const getReceipts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['date', 'amount']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await receiptService.queryReceipts(filter, options);
  res.send(result);
});

module.exports = {
  createReceipt,
  getReceipts,
};
