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
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
} = require("../controllers/userCtrl");
const { authMiddalware, isAdmin } = require("../middlewares/authMiddalware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddalware, updatePassword);

router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddalware, isAdmin, getUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddalware, updateUser);
router.put("/block-user/:id", authMiddalware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddalware, isAdmin, unblockUser);

module.exports = router;
