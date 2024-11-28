const Merchant = require('../../models/Merchant');
const createError = require('../../utils/createError');

const getMerchants = async () => {
  try {
    const merchants = await Merchant.find({});
    return merchants;
  } catch (error) {
    createError(error.message, error.status);
    console.log('error here whild fetching merchants');
  }
};

module.exports = getMerchants;
