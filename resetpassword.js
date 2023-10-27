const express = require('express');
const router = express.Router();
const reset = require('../controllers/ResetPassword');

const authenticatemiddleware = require('../middleware/auth');


router.post('/password/forgotpassword',reset.forgotpass);



module.exports = router;