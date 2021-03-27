import React from 'react';
import './Register.css';
import google from '../../assets/Image/google.png';
import hamza from '../../assets/Image/hamza.jpg';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const register = () => {
	return (
		<Container className="register">
			<Row>
				<Col md={6} className="left-box m-0">
					<div className="title mb-4">Create account</div>

					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" style={{ height: '3em' }} />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Set Password</Form.Label>
							<Form.Control type="password" placeholder="Password" style={{ height: '3em' }} />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Password" style={{ height: '3em' }} />
						</Form.Group>

						<Button variant="primary" type="submit" size="lg" className="mt-3" block>
							Register
						</Button>

						<div className="register-text">
							Already have an account?<a href=""> Login here</a>
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
