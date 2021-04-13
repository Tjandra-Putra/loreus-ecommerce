const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(
	cors({
		origin: [ 'http://localhost:3000' ],
		methods: [ 'GET', 'POST' ],
		credentials: true //enable cookie
	})
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
	session({
		key: 'userId', // name of cookie
		secret: '`Nzz7LqFi`g@?e',
		resave: false,
		saveUninitialized: false,
		cookie: {
			expires: 60 * 60 * 24 // 24 hours session
		}
	})
);

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'react-loreus-db'
});

// ======== RETRIEVE ========
app.post('/api/retrieve-user-login', (req, res) => {
	const user_email = req.body.user_email;
	const user_password = req.body.user_password;

	db.query('SELECT * FROM user WHERE email = ?', [ user_email ], (err, result) => {
		if (err) {
			res.send({ error: err });
		}
		// result is an array of object
		if (result.length > 0) {
			bcrypt.compare(user_password, result[0].password, (error, response) => {
				if (response) {
					req.session.user = result; // created session name = user
					console.log(req.session.user);
					res.send(result);
				} else {
					res.send({ message: 'Wrong email/password combination!' });
				}
			});
		} else {
			res.send({ message: 'User does not exist!' });
		}
	});
});

app.get('/api/retrieve-user-login', (req, res) => {
	if (req.session.user) {
		res.send({ loggedIn: true, user: req.session.user });
	} else {
		res.send({ loggedIn: false });
	}
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

app.post('/api/insert-register-account', (req, res) => {
	// Getting data from front end
	const user_email = req.body.user_email;
	const user_password = req.body.user_password;

	// hashing password
	bcrypt.hash(user_password, saltRounds, (err, hash) => {
		if (err) {
			console.log(err);
		}

		db.query(sqlInsert, [ user_email, hash ], (err, result) => {
			console.log(result);
			console.log(err);
		});
	});

	const sqlInsert = 'INSERT INTO user (email, password) VALUES (?,?)';
});

app.listen(3001, () => {
	console.log('running on port 3001');
});
