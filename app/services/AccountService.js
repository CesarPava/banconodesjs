const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
    const customerFound = await CustomerRepository.findById(customerId)
    if (customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
    const customerFound = await CustomerRepository.findById(account.customerid)
    if(customerFound.length === 0){
        throw new Error('Customer does not exist') 
    }

    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    if(accountsByCustomer.length >= 3){
        throw new Error('no more than 3 accounts...')
    }
    account.openedat = new Date();
    account.amount = 0;
    await AccountRepository.create(account)
}

AccountService.cancel = async (accountId) => {
    const accountFound = await AccountRepository.findById(accountId)
    if(accountFound.length === 0){
        throw new Error('Account does not exist') 
    }
    if(accountFound[0].amount > 0){
        throw new Error('This account has any amount')
    }
    await AccountRepository.cancel(accountId)
}

AccountService.takeMoneyOut = async (accountId, moneyRequest) => {
    const accountFound = await AccountRepository.findById(accountId)
    if(accountFound.length === 0){
        throw new Error('Account does not exist') 
    }
    if (accountFound[0].amount < moneyRequest){
        throw new Error('Money is not enought')
    }
    if ((accountFound[0].amount - moneyToTransfer) < 0){
        throw new Error('Money is not enought')
    }
    accountFound[0].amount = accountFound[0].amount - moneyRequest
    await AccountRepository.edit(accountId, accountFound[0])
}

AccountService.addMoney = async (accountId, moneyToAdd) => {
    money = parseInt(moneyToAdd)
    const accountFound = await AccountRepository.findById(accountId)
    if(accountFound.length === 0){
        throw new Error('Account does not exist') 
    }
    accountFound[0].amount = accountFound[0].amount + money
    await AccountRepository.edit(accountId, accountFound[0])
}

AccountService.transferMoney = async (accountId, idTransfer, money) => {
    moneyToTransfer = parseInt(money)
    const accountFoundOne = await AccountRepository.findById(accountId)
    const accountFoundTwo = await AccountRepository.findById(idTransfer)
    if(accountFoundOne.length === 0){
        throw new Error('Account one does not exist') 
    }
    if(accountFoundTwo.length === 0){
        throw new Error('Account two does not exist') 
    }
    if ((accountFoundOne[0].amount - moneyToTransfer) < 0){
        throw new Error('Money is not enought')
    }
    accountFoundOne[0].amount -= moneyToTransfer
    accountFoundTwo[0].amount += moneyToTransfer
    await AccountRepository.edit(idTransfer, accountFoundTwo[0])
    await AccountRepository.edit(accountId, accountFoundOne[0])
}