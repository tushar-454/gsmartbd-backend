const createError = require('../../utils/createError');
const Admin = require('../../models/Admin');

const updateAdmin = async ({ name, email, password, photo, lastLogin }) => {
  try {
    const admin = await Admin.findOne({ email });
    admin.name = name ?? admin.name;
    admin.email = admin.email ?? admin.email;
    admin.password = password ?? admin.password;
    admin.photo = photo ?? admin.photo;
    admin.lastLogin = lastLogin ?? admin.lastLogin;
    admin.updatedAt = Date.now();
    const updateAdminResult = await admin.save();
    return updateAdminResult._doc;
  } catch (error) {
    createError(error.message, error.status);
  }
};

module.exports = updateAdmin;
