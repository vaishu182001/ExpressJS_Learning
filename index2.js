const express = require('express')
const jsonData = require('./mockdata.json');
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(jsonData)
})