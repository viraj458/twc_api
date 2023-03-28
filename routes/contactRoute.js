const express = require('express')
const { createContact } = require('../controllers/contactController')
const auth = require('../middlewares/auth')

const router = express.Router()

//auth for all contact routes
router.use(auth)

//create a contact
router.post('/', createContact)

module.exports = router