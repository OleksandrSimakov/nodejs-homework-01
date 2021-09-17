const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeContact(contactId) {
  const contacts = await listContacts()
  const idx = contacts.findIndex((item) => item.id === contactId)
  if (idx === -1) {
    return console.log(`Контакта с таким id ${contactId} нет`)
  }
  const newContacts = contacts.filter((item) => item.id !== contactId)
  await updateContacts(newContacts)
  console.log(`Контакт с id ${contactId} был успешно удален`)
}

module.exports = removeContact
