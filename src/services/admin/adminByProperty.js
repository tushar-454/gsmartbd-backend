const Admin = require('../../models/Admin');

const adminByProperty = async (property, value) => {
  const admin = await Admin.findOne({ [property]: value });
  if (!admin) return null;
  return admin._doc;
};

module.exports = adminByProperty;
