const express = require('express')
const jsonData = require('./mockdata.json');
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {
  res.send('HTTP Methods testing using Postman')
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/insert',(req,res)=>
{
    res.send("This is a post method")
})
app.put('/update',(req,res)=>
{
    res.send("This is a put method")
})
app.delete('/delete',(req,res)=>
{
    res.send("This is a delete method")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 // console.log(jsonData)
})