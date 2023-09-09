import express from 'express'
const app = express()
//development
import signale from 'signale'
//route
import route from '../src/db/mongodb/index.js'


// import main from '../src/db/postgresql/connection.js'


//for listen to server in port 3000
app.listen(3000,()=>{
    signale.success('Port: connected')
})
 
// middleware 
 app.use(express.json())
 app.use('/', route)


