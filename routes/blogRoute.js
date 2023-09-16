const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
} = require("../controllers/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddalware");
const router = express.Router();

router.post("/", createBlog);
router.put("/:id", updateBlog);
router.put("/like", liketheBlog);
router.put("/dislike", disliketheBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;
