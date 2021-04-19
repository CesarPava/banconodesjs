const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')

const router = express.Router();

router.post('/customers', CustomerController.createCustomer);
router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccountsByCustomer);
router.post('/accounts', AccountController.createAccount);
router.delete('/accounts/:id', AccountController.cancel);
router.put('/accounts/:id/:money', AccountController.edit);
router.put('/accounts/:id/add/:money',AccountController.addMoney);
router.put('/accounts/:id/:idTransfer/:money', AccountController.transferMoney);
module.exports = router;