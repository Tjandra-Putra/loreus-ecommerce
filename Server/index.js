const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'react-loreus-db'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Notes
// req means getting data from front-end
// res means sending a response to server

// ======== RETRIEVE ========
app.get('/api/retrieve-user', (req, res) => {
	const sqlSelect = 'SELECT * FROM user';
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

// ======== INSERT ========
app.post('/api/insert-support', (req, res) => {
	// Getting data from front end
	const email = req.body.email;
	const category = req.body.category;
	const message = req.body.message;
	const dateTime = req.body.dateTime;

	const sqlInsert = 'INSERT INTO support (email, category, message, dateTime) VALUES (?,?,?,?)';
	db.query(sqlInsert, [ email, category, message, dateTime ], (err, result) => {
		console.log(result);
		console.log(err);
	});
});

app.listen(3001, () => {
	console.log('running on port 3001');
});
