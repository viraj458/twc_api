const db = require('../db')

//create a contact
const createContact = async(req, res) => {
    try {
        const user_id = req.user.id
        const {fullName,gender,email,phoneNumber} = req.body
        await db('contacts').insert({
            full_name: fullName,
            gender,
            email,
            phone_number: phoneNumber,
            user_id
        })
        res.status(200).json("contact successfully added")
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    createContact
}