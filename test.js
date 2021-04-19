const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')

/*async function probar(){
    const result = await AccountService.create({
        id: '4365',
        customerid: '4321'
    })
    console.log(result)
}
probar().then(console.log('OK'))

async function probarCrearCliente(){
    await CustomerService.create({
        id: '2345',
        lastname: 'baca',
        name: 'fabian',
        email: 'fabian@gmail.com'
    })
}
probarCrearCliente().then(console.log('OK'))
async function probarEditar() {
    await CustomerService.edit('234513', {
        lastname: 'quitian',
        name: 'obdulio'
    })
}
probarEditar().then(console.log('OK'))

async function probarEliminar() {
    await CustomerService.delete('2345')
}
probarEliminar().then(console.log('OK'))

async function probarBuscar() {
    const customer = await CustomerService.findCustomer('4321')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))*/

/*const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountRepository')
console.log('probando...')

async function probandoListarCuentas() {
    const list = await AccountRepository.listAccountsByCustomer('4321')
    console.log(list)
}

probandoListarCuentas()
.then(console.log('OK'))
ClienteRepository.create({
    name: 'juan',
    lastname: 'ferrer',
    id: '4321',
    email: 'juan@juan.com'
}).then(console.log)


async function probandoElBuscar() {
    const cliente = await ClienteRepository.findById('4321')
    console.log(cliente)
}

//probandoElBuscar().then(console.log('OK'))

async function probandoElEditar() {
    await ClienteRepository.edit('4321',{
        name: 'jose',
        lastname: 'perez'
    })
}

//probandoElEditar()
//.then(console.log('OK'))

async function probandoEliminar() {
    await ClienteRepository.delete('4321')
}

//probandoEliminar()
//.then(console.log('OK'))
*/

