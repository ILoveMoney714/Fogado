const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'test' 
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/api/test-db', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            return res.status(500).send('Database query failed.');
        }
        res.send('Database connection is successful!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});