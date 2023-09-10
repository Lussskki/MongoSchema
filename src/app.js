import express from 'express'
const app = express()
//development
import signale from 'signale'
import bodyParser from 'body-parser'
//route
import route from '../src/db/mongodb/index.js'


// middleware 
 app.use(bodyParser.json())
 app.use('/', route)



//for listen to server in port 3000
app.listen(3000,()=>{
    signale.success('Port: connected')
})
