const getMerchants = require('./controllers/getMerchants');
const getMerchantById = require('./controllers/getMerchantById');
const updateMerchantById = require('./controllers/updateMerchantById');
const deleteMerchantById = require('./controllers/deleteMerchantById');

module.exports = {
  getMerchants,
  getMerchantById,
  updateMerchantById,
  deleteMerchantById,
};
