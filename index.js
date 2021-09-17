const contactFunctions = require('./contacts')

const argv = require('yargs').argv

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case 'list':
        return console.table(await contactFunctions.listContacts())
        break

      case 'get':
        return console.log(await contactFunctions.getContactById(id))
        break

      case 'add':
        return console.log(
          'This contact sucessfully added: \n',
          await contactFunctions.addContact(name, email, phone),
        )
        break

      case 'remove':
        return await contactFunctions.removeContact(id)
        break

      default:
        console.warn('\x1B[31m Unknown action type!')
    }
  } catch (error) {
    throw error
  }
}

invokeAction(argv)
