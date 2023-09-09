import mongoose from 'mongoose'
//for development
import signale from 'signale'
import dotenv from 'dotenv'
       dotenv.config()
      
const string = process.env.MONGODB_URI

try{
    mongoose.connect(string,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    signale.success('Mongo: connected')
}catch(err){
    signale.error(`Db: error ${err}`)
}

export default mongoose