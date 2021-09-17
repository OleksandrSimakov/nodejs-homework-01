const fs = require('fs/promises')

const contactsPath = 'db/contacts.json'

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    const result = JSON.parse(data)
    return result
  } catch (error) {
    console.log(error)
  }
}

module.exports = listContacts
