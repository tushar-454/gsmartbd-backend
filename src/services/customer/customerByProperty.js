const Customer = require('../../models/Customer');

const customerByProperty = async (property, value) => {
  const customer = await Customer.findOne({ [property]: value });
  if (!customer) return null;
  return customer._doc;
};

module.exports = customerByProperty;
