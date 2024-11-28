const router = require('express').Router();
const { getBlogs, createBlog, getBlogById, updateBlogById, deleteBlogById } = require('../api/v1/blog/controllers');
const { createBlogValidation, updateBlogByIdValidation } = require('../api/v1/blog/validation');
const validateToken = require('../middlewares/validateToken');

router.get('/', getBlogs);
router.post('/', validateToken, createBlogValidation, createBlog);
router.get('/:id', getBlogById);
router.put('/:id', validateToken, updateBlogByIdValidation, updateBlogById);
router.delete('/:id', validateToken, deleteBlogById);

module.exports = router;
