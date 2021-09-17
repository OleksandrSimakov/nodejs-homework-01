const listContacts = require('./listContacts')

async function getContactById(contactId) {
  const contacts = await listContacts()
  const contact = contacts.find((item) => item.id === contactId)
  if (!contact) {
    return console.log(`Нет контакта с таким Id ${contactId}`)
  }
  return console.log(contact)
}

module.exports = getContactById
