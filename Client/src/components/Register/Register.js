import React, { useRef } from 'react';
import './Register.css';
import google from '../../assets/Image/google.png';
import hamza from '../../assets/Image/hamza.jpg';
import Axios from 'axios';

import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form/dist/index.ie11';

const register = () => {
	const { register, handleSubmit, errors, watch } = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	const onSubmit = (data) => {
		console.log(data);
		console.log(errors);

		Axios.post('http://localhost:3001/api/insert-register-account', {
			user_email: data.email,
			user_password: data.password
		}).then(() => {
			alert('successful insert');
		});

		console.log(data.email);
	};

	return (
		<Container className="register">
			<Row>
				<Col md={6} className="left-box m-0">
					<div className="title mb-4">Create account</div>

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
							<Form.Label>Set Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								style={{ height: '3em' }}
								ref={register({
									required: 'You must specify a password',
									minLength: {
										value: 8,
										message: 'Password must have at least 8 characters'
									}
								})}
								name="password"
							/>
							{errors.password && (
								<Form.Text className="text-danger">{errors.password.message}</Form.Text>
							)}
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								style={{ height: '3em' }}
								name="confirmPassword"
								ref={register({
									validate: (value) => value === password.current || 'The passwords do not match'
								})}
							/>
							{errors.confirmPassword && (
								<Form.Text className="text-danger">{errors.confirmPassword.message}</Form.Text>
							)}
						</Form.Group>

						<Button variant="primary" type="submit" size="lg" className="mt-3" block>
							Register
						</Button>

						<div className="register-text">
							Already have an account?
							<LinkContainer to="/login">
								<a> Login here</a>
							</LinkContainer>
						</div>

						<div className="or">──────── &nbsp; or &nbsp; ────────</div>

						<Button variant="outline-dark" type="submit" size="lg" className="mt-3" block>
							<img src={google} alt="" width="22" /> &nbsp;Continue with Google
						</Button>
					</Form>
				</Col>
				<Col md={6} className="m-0">
					<img src={hamza} alt="" className="img-fluid d-none d-sm-block" />
				</Col>
			</Row>
		</Container>
	);
};

export default register;
