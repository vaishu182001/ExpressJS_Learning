const express = require('express')
const jsonData = require('./mockdata.json');
const app = express()
const port = 3000
const path=require('path')


app.get('/', (req, res) => {
  res.json(jsonData)
})
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})