import dotenv from 'dotenv'
import express from 'express'
import mysql from 'promise-mysql'// 以下を追加

const app = express()
dotenv.config()
// 以下を追加
app.get('/', (req, res) => {
  connection()
    .then((connection) => {
      const result = connection.query('SELECT * FROM jpmarket_tbl')
      connection.end()
      return result
    })
    .then(function (rows) {
      res.send(rows)
    })
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// 以下を追加
const db = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
}

const connection = async () => {
  return await mysql.createConnection(db)
}

export default connection
