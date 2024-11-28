const getBlogs = require('./getBlogs');
const createBlog = require('./createBlog');
const getBlogById = require('./getBlogById');
const updateBlogById = require('./updateBlogById');
const deleteBlogById = require('./deleteBlogById');

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
