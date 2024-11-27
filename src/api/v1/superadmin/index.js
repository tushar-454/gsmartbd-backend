const getSuperAdmin = require('./controllers/getSuperAdmin');
const updateSuperAdmin = require('./controllers/updateSuperAdmin');
const getAdminById = require('./controllers/getAdminById');
const updateAdminById = require('./controllers/updateAdminById');
const deleteAdminById = require('./controllers/deleteAdminById');
const getAdmins = require('./controllers/getAdmins');

module.exports = {
  getSuperAdmin,
  updateSuperAdmin,
  getAdminById,
  updateAdminById,
  deleteAdminById,
  getAdmins,
};
