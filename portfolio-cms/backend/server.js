const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'portfolio'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Portfolio CMS Backend Running');
});

app.get('/projects', (req, res) => {
  const sql = 'SELECT * FROM projects';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/projects', (req, res) => {
  const { title, description } = req.body;
  const sql = 'INSERT INTO projects (title, description) VALUES (?, ?)';
  db.query(sql, [title, description], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, title, description });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
