const express = require('express');
const { registerUser, loginUser, resetPassword } = require('../Controller/Auth.controller');

const authRouter = express.Router();


authRouter.post('/register', registerUser )
authRouter.post('/login', loginUser )
authRouter.post('/reset-password', resetPassword )

module.exports = {authRouter}