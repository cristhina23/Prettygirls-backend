const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
} = require("../controllers/userCtrl");
const { authMiddalware, isAdmin } = require("../middlewares/authMiddalware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/:id", authMiddalware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddalware, updateUser);
router.put("/block-user/:id", authMiddalware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddalware, isAdmin, unblockUser);

module.exports = router;
