import express from 'express'
const app = express()
//development
import signale from 'signale'
import bcrypt from 'bcrypt'

//db path
import mongoose from '../src/db/mongodb/connection.js'
import main from '../src/db/postgresql/connection.js'
//user schema
import User from '../src/db/mongodb/models/schema.js'

//for listen to server in port 3000
app.listen(3000,()=>{
    signale.success('Port: connected')
})
 
// middleware 
 app.use(express.json())


//http:get method
app.get('/',async (req,res)=>{
    try{
        const users = await User.find()        
        res.status(200).json({message:users})
    }catch(err){
        signale.error(`Get: error- ${err}`)
        res.status(500).json({err:`Get: error- ${err}`})
    }
})
//http:add method, sign up 
app.post('/signup', async (req,res)=>{
        const {email,password} = req.body
    try{
        const exisitingUser = await User.findOne({email})
    if(exisitingUser){
        return res.status(400).json({error: 'email already registered'})
    }
    //hashed password
    const hashedPassword = await bcrypt.hash(password,10) 
    const newUser = new User({
        email,
        password: hashedPassword,
      })
        await newUser.save() 
        res.status(200).json({message:'Post: added'})
    }catch(err){
        signale.error(`Signup: error- ${err}`)
        res.status(500).json({err:`Signup: error- ${err}`})
    }
})
//http: update method
app.put('/signup/:id', async (req, res)=>{
        const {id} = req.params
        const {username,lastname} = req.body    
    try{ 
        const user = await User.findByIdAndUpdate(id,{username,lastname},{new: true})
        res.send(user)    
    }catch(err){
        signale.error(`Put: error-${err}`)
        res.status(500).json({message:`Put: error- ${err}`})
    }
})
//http: delete method
app.delete('/signup/:id', async (req, res)=>{
        const id = req.params.id
    try{
        const user = await User.findByIdAndDelete(id)
        res.send(user)
    }catch(err){
        signale.error(`Delete: error-${err}`)
        res.status(500).json({message:`Delete: error-${err}`})
        
    }
}) 
