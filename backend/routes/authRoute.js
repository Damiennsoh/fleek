const express = require('express');
const { createUser, loginUserCtrl, getAllUser, getAUser, deleteAUser, updatedUser,
     blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken,
      resetPassword,  getWishlist, saveAddress, userCart, getUserCart, emptyCart, 
      applyCoupon, createOrder, getOrders, updateOrderStatus, loginAdmin } = require('../controller/UserCtrl');
const { authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
const router = express.Router();
router.post('/register', createUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);
router.put('/ order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus);


router.put('/password',authMiddleware, updatePassword);
router.post('/admin-login', loginAdmin );
router.post('/login', loginUserCtrl  );
router.post('/cart', authMiddleware, userCart );
router.post('/cart/applycoupon', authMiddleware, applyCoupon );
router.post('/cart/cash-order',authMiddleware, createOrder);
router.get('/allUsers', getAllUser);
router.get('/get-orders', authMiddleware, getOrders);

router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/wishlist', authMiddleware, getWishlist);
router.get('/cart', authMiddleware, getUserCart);


router.get('/:id', authMiddleware, isAdmin, getAUser);
router.delete('/empty-cart', authMiddleware, emptyCart);
router.delete('/:id', deleteAUser);


router.put('/edit-user', authMiddleware, updatedUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;