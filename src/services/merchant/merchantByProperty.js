const Merchant = require('../../models/Merchant');

const merchantByProperty = async (property, value, isDoc = true) => {
  const merchant = await Merchant.findOne({ [property]: value });
  if (!merchant) return null;
  if (isDoc) return merchant._doc;
  return merchant;
};

module.exports = merchantByProperty;
