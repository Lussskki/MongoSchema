import pkg from 'pg'
const { Pool } = pkg
//development
import signale from 'signale'
import dotenv from 'dotenv'
       dotenv.config()

const pool = new Pool({
  user: process.env.POSTGRE_USER,
  host: process.env.POSTGRE_HOST,
  database: process.env.POSTGRE_DATABASE,
  password: process.env.POSTGRE_PASSWORD,
  port: process.env.POSTGRE_PORT
})

async function query(text, params) {
    const client = await pool.connect()
    try {
      const result = await client.query(text, params)
      return result.rows
    } finally {
      client.release()
      
    }
  }
  async function main() {
    try {
      const rows = await query('SELECT * FROM test')
      signale.success('Postgre: connected')
      console.log(rows)
    } catch (error) {
      console.error('PostgreSQL query error:', error)
      
    }
  }
  
   

  
  export default main()

