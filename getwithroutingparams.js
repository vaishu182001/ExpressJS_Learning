const express = require('express')
const jsonData = require('./mockdata.json');
const app = express()
const port = 3000
const path=require('path')

app.get('/', (req, res) => {
  res.send('HTTP Methods testing using Postman')
})
//app.get('/about', (req, res) => {
  //res.sendFile(path.join(__dirname,'index.html'))
//})
app.get('/details/:id', (req, res) => {
    const itemId = parseInt(req.params.id); // Convert the parameter to an integer
  
   
    const item = jsonData.find((jsonData) => jsonData.id === itemId);
  
    if (!item) {
      // If the item is not found, send a 404 response
      res.status(404).json({ message: 'Item not found' });
    } else {
      // If the item is found, send it as a JSON response
      res.json(item);
    }
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 // console.log(jsonData)
})