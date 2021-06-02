// BUILD YOUR SERVER HERE

const express = require('express')

const server = express()

const User = require('./users/model')

server.use(express.json())

server.get('/api/users', async (req,res)=>{
    const user = await User.find()
    try{
        res.json(user)
    }catch(err){
        res.json({
            message: 'The user information could not be retrieved'
        })
    }
})
server.get('/api/users/:id', async (req,res)=>{
    const user = await User.findById(req.params.id)
    try{
        if(!user){
            res.status(404).json({
                message: 'The user with the specified ID does not exist'
            })
        }else{
            res.json(user)
        }
    }catch(err){
        res.json({
            message: 'The user information could not be retrieved'
        })
    }
})
server.post('/api/users', async (req,res)=>{
    const {name, bio} = req.body
    try{
        if(!name || 
            !name.trim() || 
            !bio ||
            !bio.trim()){
                res.status(400).json({
                    message: 'Pleas provide name and bio for the user'
                })
            }else{
               const user = await User.insert({name, bio})
               res.status(201).json(user)
           }
    }catch(err){
        res.json({
            message: 'There was an error while saving the user to the database'
        })
    }
})
server.delete('/api/users', (req,res)=>{
    
})
server.put('/api/users', (req,res)=>{
    
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
