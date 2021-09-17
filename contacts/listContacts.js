const fs = require('fs/promises')

const contactsPath = require('../db/contacts.json')

const listContacts = async () => contactsPath

module.exports = listContacts
