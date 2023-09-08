import express from 'express'
const app = express()
//development
import signale from 'signale'

//db path
import db from '../src/db/mongodb/connection.js'
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
        signale.error(`Get: error fetching users to postman- ${err}`)
        res.status(500).json({err:`failed to get users from mongo- ${err}`})
    }
})
 
//http:add method
app.post('/users',async (req,res)=>{
    try{
        const {username,lastname} = req.body
        const newUser = new User ({username,lastname})
        await newUser.save()
        signale.success('Db: added user')
        res.status(200).json({message:'added user'})
    }catch(err){
        signale.error(`Db: failed for adding req.body- ${err}`)
        res.status(500).json({err:`failed to add user in db- ${err}`})
    }
})

// app.put('/users/:id', async (req, res)=>{
//     try{
//         const userId = req.params
//     }catch(err){}
// })
