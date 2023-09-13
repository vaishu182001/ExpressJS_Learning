const express = require('express');
const app = express();
const port = 3000;

// Chained route for the '/example' path
app
  .route('/example')
  .get((req, res, next) => {
    console.log('GET request to /example');
    throw new Error;
    // You can perform some logic here
    next(); // Pass control to the next route handler
  })
  .post((req, res, next) => {
    console.log('POST request to /example');
    // You can perform some logic here
    next(); // Pass control to the next route handler
  })
  .put((req, res) => {
    console.log('PUT request to /example');
    // You can perform some logic here
    res.send('PUT request to /example');
  });
  app.use((err,req,res,next)=>
  {
      console.log(err);
      res.status(500).send("Broken file!");
  }
  );
// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
