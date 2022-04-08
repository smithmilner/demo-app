const express = require('express')
const app = express()
const port = 3000

if (!process.env.NAME) {
  throw new Error('NAME must be defined')
}

const APP_ENV = process.env.APP_ENV || 'dev'
const name = process.env.NAME

app.get('/', (req, res) => {
  res.send(`${APP_ENV}: Goodbye ${name}!`)
})

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`)
})
