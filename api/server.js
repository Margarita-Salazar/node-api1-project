// BUILD YOUR SERVER HERE

const express = require('express')
const { restart } = require('nodemon')

const server = express()

const User = require('./users/model')

server.use(express.json())

server.get('/api/users', async (req,res)=>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.json({
            message: 'The user information could not be retrieved'
        })
    }
})
server.get('/api/users/:id', (req,res)=>{
    
})
server.post('/api/users', (req,res)=>{
    
})
server.delete('/api/users', (req,res)=>{
    
})
server.put('/api/users', (req,res)=>{
    
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
