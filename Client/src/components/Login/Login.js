import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form/dist/index.ie11';

import './Login.css';
import google from '../../assets/Image/google.png';
import godi from '../../assets/Image/godi.jpg';

import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const login = () => {
	// "register" is a keyword in useForm
	const { register, handleSubmit } = useForm();

	// state
	const [ loginStatus, setLoginStatus ] = useState('');

	// session
	Axios.defaults.withCredentials = true;

	const onSubmit = (data) => {
		// console.log(data);
		// console.log(errors);

		Axios.post('http://localhost:3001/api/retrieve-user-login', {
			user_email: data.email,
			user_password: data.password
		}).then((response) => {
			console.log(response);

			if (response.data.message) {
				setLoginStatus(response.data.message); // Login fail
			} else {
				setLoginStatus(response.data[0].email); // Login Success
			}
		});
	};

	// only called once every page refrehses
	useEffect(() => {
		// making axios request to see if user is logged in
		Axios.get('http://localhost:3001/api/retrieve-user-login').then((response) => {
			if (response.data.loggedIn === true) {
				setLoginStatus(response.data.user[0].email);
			}
		});
	}, []);
	return (
		<Container className="login">
			<Row>
				<Col md={6} className="left-box m-0">
					<div className="title mb-4">Sign In</div>

					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								style={{ height: '3em' }}
								ref={register}
								name="email"
								autoFocus
							/>
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								style={{ height: '3em' }}
								ref={register}
								name="password"
							/>
						</Form.Group>

						<div class="d-flex justify-content-between">
							<div class="bd-highlight">
								<Form.Group controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Keep me signed in" />
								</Form.Group>
							</div>
							<div class="bd-highlight">
								<a href="">Forgot password?</a>
							</div>
						</div>

						<Button variant="primary" type="submit" size="lg" className="mt-3" block>
							Sign In
						</Button>

						<div className="register-text">
							Not registered yet?
							<LinkContainer to="/register">
								<a> Create new account</a>
							</LinkContainer>
						</div>

						<div className="or">──────── &nbsp; or &nbsp; ────────</div>

						<Button variant="outline-dark" type="submit" size="lg" className="mt-3" block>
							<img src={google} alt="" width="22" /> &nbsp;Continue with Google
						</Button>

						<Form.Text className="text-danger float-right">{loginStatus}</Form.Text>
					</Form>
				</Col>
				<Col md={6} className="m-0">
					<img src={godi} alt="" className="img-fluid d-none d-sm-block" />
				</Col>
			</Row>
		</Container>
	);
};

export default login;
