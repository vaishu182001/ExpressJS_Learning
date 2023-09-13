const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., your HTML file)
app.use(express.static('public'));

// MySQL database connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change this to your MySQL username
    password: '', // Change this to your MySQL password
    database: 'mydb', // Change this to your database name
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Define a route to display the HTML form (GET request)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

// Define a route to handle form submissions (POST request)
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Insert the form data into the database
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into the database:', err);
            res.status(500).json({ error: 'Error inserting data into the database' });
        } else {
            console.log('Data inserted successfully');
            res.status(200).send('Form data submitted and saved to the database.');
        }
    });
});

// Start the Express.js server
app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
