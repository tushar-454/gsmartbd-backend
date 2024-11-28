const router = require('express').Router();
const { getMerchants, getMerchantById, updateMerchantById, deleteMerchantById, getCustomerById, deleteCustomerById, updateCustomerById } = require('../api/v1/admin/controllers');
const { getCustomers } = require('../api/v1/admin/controllers');
const { updateMerchantByIdValidation, updateCustomerByIdValidation } = require('../api/v1/admin/validation');

router.get('/merchants', getMerchants);
router.get('/merchants/:id', getMerchantById);
router.put('/merchants/:id', updateMerchantByIdValidation, updateMerchantById);
router.delete('/merchants/:id', deleteMerchantById);
// admin routes for customer management
router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomerById);
router.put('/customers/:id', updateCustomerByIdValidation, updateCustomerById);
router.delete('/customers/:id', deleteCustomerById);

module.exports = router;
