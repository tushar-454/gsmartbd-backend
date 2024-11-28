const router = require('express').Router();
const { getMerchants, getMerchantById, updateMerchantById, deleteMerchantById } = require('../api/v1/admin');
const { updateMerchantByIdValidation } = require('../api/v1/admin/validation');

router.get('/merchants', getMerchants);
router.get('/merchants/:id', getMerchantById);
router.put('/merchants/:id', updateMerchantByIdValidation, updateMerchantById);
router.delete('/merchants/:id', deleteMerchantById);

module.exports = router;
