const merchantByProperty = require('../../../../services/merchant/merchantByProperty');
const deleteMerchantByIdService = require('../../../../services/merchant/deleteMerchantById');

const deleteMerchantById = async (req, res, next) => {
  try {
    const { user } = req;
    const { id } = req.params;
    if (user.role !== 'admin' && user.role !== 'superadmin') {
      return res.status(403).json({ message: 'Forbidden access' });
    }

    const merchant = await merchantByProperty('_id', id);

    if (!merchant) {
      return res.status(404).json({ message: 'Merchant not found' });
    }

    const deletedMerchant = await deleteMerchantByIdService(id);

    if (deletedMerchant.deletedCount > 0) {
      return res.status(200).json({ status: 200, message: 'Merchant deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteMerchantById;
