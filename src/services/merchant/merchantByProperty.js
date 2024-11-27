const Merchant = require('../../models/Merchant');

const merchantByProperty = async (property, value) => {
  const merchant = await Merchant.findOne({ [property]: value });
  return merchant._doc;
};

module.exports = merchantByProperty;
