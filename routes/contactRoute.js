const express = require('express')
const { createContact, getContacts, deleteContact } = require('../controllers/contactController')
const auth = require('../middlewares/auth')

const router = express.Router()

//auth for all contact routes
router.use(auth)



//create a contact
router.post('/', createContact)

//get contacts
router.get('/', getContacts)

//delete a contact
router.delete('/:id', deleteContact)

module.exports = router