import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Support.css';
import phoneGif from '../../assets/Image/phone_calling.gif';

const support = () => {
	return (
		<div>
			<Container fluid className="banner text-center text-white">
				<h1>Get In Touch</h1>
				<p>What can we help you with? We are happy to assist you as much as possible.</p>
			</Container>
			<Container>
				<Row>
					<Col md={6} sm={12}>
						<div className="box">
							<Form>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>Category</Form.Label>
									<Form.Control as="select">
										<option>-- Please Select --</option>
										<option>Product</option>
										<option>Business</option>
										<option>General</option>
										<option>Account</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={3} />
								</Form.Group>

								<Button variant="success" className="float-right">
									Send Message
								</Button>
							</Form>
						</div>
					</Col>
					<Col md={6} sm={12}>
						<div className="box text-center">
							<h5>Other Ways to Connect</h5>
							<p class="pb-0 mb-0">
								Call, email, send us a postcard — whatever works for you. We'll be here.
							</p>
							<img src={phoneGif} className="img-fluid" alt="introImage" width="350" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default support;
