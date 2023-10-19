const express = require('express');
const router = express.Router();
const expensesignin = require('../controllers/expensesignin');

router.get('/user/alreadyexist/:id', expensesignin.alreadyauser);
router.post('/user/signin', expensesignin.registeruser);
//router.delete('/del-product/:id',productController.delproduct);

//router.get('/products', productController.getProducts);

module.exports = router;