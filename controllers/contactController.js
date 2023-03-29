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

//get contacts
const getContacts = async(req, res) => {
    try {
        const user_id = req.user.id
        // const contacts = await Contact.find({user_id}).sort({createdAt: -1})
        const contacts = await db('contacts').where({user_id}).select('*')

        res.status(200).json(contacts)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

//delete a contact
const deleteContact = async (req, res) => {
    try {
      const { id } = req.params;
      const contact = await db('contacts').where({ id }).first();
      if (!contact) {
        return res.status(404).json({ error: "contact not found" });
      }
      await db('contacts').where({ id }).del();
      res.status(200).json(contact);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


module.exports = {
    createContact,
    getContacts,
    deleteContact
}