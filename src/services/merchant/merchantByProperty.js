const Merchant = require('../../models/Merchant');

const merchantByProperty = async (property, value) => {
  const merchant = await Merchant.findOne({ [property]: value });
  if (!merchant) return null;
  return merchant._doc;
};

module.exports = merchantByProperty;
