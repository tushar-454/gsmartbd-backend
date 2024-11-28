const Merchant = require('../../models/Merchant');
const createError = require('../../utils/createError');

const deleteMerchantById = async (id) => {
  try {
    const deletedAdmin = await Merchant.deleteOne({ _id: id });
    return deletedAdmin;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = deleteMerchantById;
