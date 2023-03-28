const jwt = require('jsonwebtoken')
const db =require('../db')

const auth = async(req, res, next) => {
    //verify user is authenticated
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authentication token is required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {id} = jwt.verify(token, process.env.SECRET)
        req.user = await db('users').where({id}).select('id').first()
        next()
    } catch (err) {
        console.log(err)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = auth