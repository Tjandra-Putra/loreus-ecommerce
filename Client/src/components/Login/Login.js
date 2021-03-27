import React from 'react';
import './Login.css';
import google from '../../assets/Image/google.png';
import daria from '../../assets/Image/daria.jpg';
import godi from '../../assets/Image/godi.jpg';

import { LinkContainer } from 'react-router-bootstrap';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const login = () => {
	return (
		<Container className="login">
			<Row>
				<Col md={6} className="left-box m-0">
					<div className="title mb-4">Sign In</div>

					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" style={{ height: '3em' }} />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" style={{ height: '3em' }} />
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
