import dotenv from 'dotenv'
import express from 'express'
const app = express()
dotenv.config()
app.get('/', (req, res) => {
  res.send('<H1>Hello World!</H1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
