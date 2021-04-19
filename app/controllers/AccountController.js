const AccountController = module.exports
const AccountService = require('../services/AccountService')

AccountController.listAccountsByCustomer = async (req, res, next) => {
    const params = req.params;
    try {
        const response = await AccountService.listAccountsByCustomer(params.id)
        res.send(response)
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}
AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try{
        await AccountService.create(body)
        res.send({message: 'account created'})
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.cancel = async (req, res, next) => {
    const params = req.params;

    try {
        await AccountService.cancel(params.id)
        res.send({message: 'Account canceled'})
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.edit = async (req, res, next) => {
    const params = req.params;

    try {
        await AccountService.takeMoneyOut(params.id, params.money)
        res.send({message: 'money updated'})
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}
AccountController.addMoney = async (req, res, next) => {
    const params = req.params;

    try {
        await AccountService.addMoney(params.id, params.money)
        res.send({message: 'money added'})
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.transferMoney = async (req, res, next) => {
    const params = req.params;
    try {
        console.log("ENTRO AL CONTROLLER")
        await AccountService.transferMoney(params.id, params.idTransfer, params.money)
        res.send({message: 'money transfered'})
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}