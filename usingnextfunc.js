const express = require('express');
const app = express();
const port = 3000;

// Route handler 1
app.get('/route1', (req, res, next) => {
  console.log('Route 1 is called');
  
  next();
});

// Route handler 2
app.get('/route2', (req, res, next) => {
  console.log('Route 2 is called');
  
  next();
});


app.get('/final', (req, res) => {
  console.log('Final route handler is called');
  res.send('Hello from the final route handler!');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
