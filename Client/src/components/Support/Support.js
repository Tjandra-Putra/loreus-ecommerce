import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';

import Swal from 'sweetalert2';

import './Support.css';
import phoneGif from '../../assets/Image/phone_calling.gif';
import * as actionTypes from '../../store/actions';

class Support extends Component {
	pattern = new RegExp(
		/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	);

	state = {
		isNotSubmitted: true,
		formData: {
			email: '',
			category: '',
			message: '',
			dateTime: '',
			btnClick: 0
		}
	};

	componentDidMount = () => {
		// 	// Getting todays date and time
		let today = new Date();
		let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
		let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
		let dateTime = date + ', ' + time;

		this.setState((prevState) => ({
			formData: {
				// object that we want to update
				...prevState.formData, // keep all other key-value pairs
				dateTime: dateTime // update the value of specific key
			}
		}));
	};

	sweetAlertModal = () => {
		Swal.fire({
			title: 'Success',
			icon: 'success',
			animation: true,
			text: 'Your message has been sent.'
		});
	};

	submitButton = () => {
		if (
			this.state.formData.email.length > 0 &&
			this.pattern.test(this.state.formData.email) &&
			this.state.formData.message.length > 0 &&
			this.state.formData.category.length > 0
		) {
			return (
				<Button
					variant="dark"
					className="float-right"
					onClick={() => {
						this.props.submitFormHandler(this.state.formData);
						this.sweetAlertModal();
					}}
					type="submit"
				>
					Send Message
				</Button>
			);
		} else {
			return (
				<Button
					variant="dark"
					className="float-right"
					onClick={() => this.props.submitFormHandler(this.state.formData)}
					type="submit"
					disabled
				>
					Send Message
				</Button>
			);
		}
	};

	handleSubmitForm = (event) => {
		// prevents reload when button is set to type = submit
		event.preventDefault();

		Axios.post('http://localhost:3001/api/create-support-enquiry', {
			email: this.state.formData.email,
			category: this.state.formData.category,
			message: this.state.formData.message,
			dateTime: this.state.formData.dateTime
		}).then(() => {
			alert('successful insert');
		});

		// updates the number of times the button is clicked
		this.setState((prevState) => ({
			formData: {
				// object that we want to update
				...prevState.formData, // keep all other key-value pairs
				btnClick: 1 // update the value of specific key
			}
		}));

		console.log(
			this.state.formData.email,
			this.state.formData.message,
			this.state.formData.category,
			this.state.formData.dateTime
		);
	};

	handleEmailChange = (event) => {
		this.setState((prevState) => ({
			formData: {
				// object that we want to update
				...prevState.formData, // keep all other key-value pairs
				email: event.target.value // update the value of specific key
			}
		}));

		console.log(event.target.value);
	};

	handleMessageChange = (event) => {
		this.setState((prevState) => ({
			formData: {
				...prevState.formData,
				message: event.target.value
			}
		}));
	};

	handlerCategoryChange = (event) => {
		this.setState((prevState) => ({
			formData: {
				...prevState.formData,
				category: event.target.value
			}
		}));
	};

	render() {
		// Disable the submit button after user has sent an enquiry
		if (this.state.formData.btnClick !== 0) {
			this.submitButton = () => {
				return (
					<Button
						variant="dark"
						className="float-right"
						onClick={() => this.props.submitFormHandler(this.state.formData)}
						type="submit"
						disabled
					>
						Send Message
					</Button>
				);
			};
		}

		return (
			<div className="support">
				<Container fluid className="banner text-center text-white">
					<h1>Get In Touch</h1>
					<p>What can we help you with? We are happy to assist you as much as possible.</p>
				</Container>
				<Container>
					<Row>
						<Col md={6} sm={12}>
							<div className="box">
								<Form onSubmit={this.handleSubmitForm}>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											value={this.state.formData.email}
											onChange={this.handleEmailChange}
										/>
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group controlId="exampleForm.ControlSelect1">
										<Form.Label>Category</Form.Label>
										<Form.Control
											as="select"
											value={this.state.formData.category}
											onChange={this.handlerCategoryChange}
										>
											<option label="-- Select a category --" />
											<option>General</option>
											<option>Product</option>
											<option>Business</option>
											<option>Account</option>
										</Form.Control>
									</Form.Group>
									<Form.Group controlId="exampleForm.ControlTextarea1">
										<Form.Label>Message</Form.Label>
										<Form.Control
											as="textarea"
											rows={3}
											value={this.state.formData.message}
											onChange={this.handleMessageChange}
										/>
									</Form.Group>

									{this.submitButton()}
								</Form>
							</div>
						</Col>
						<Col md={6} sm={12}>
							<div className="box text-center box-right">
								<h5>Other Ways to Connect</h5>
								<p className="pb-0 mb-0">
									Call, email, send us a postcard — whatever works for you. We'll be here.
								</p>
								<img src={phoneGif} className="img-fluid" alt="introImage" width="350" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

// ==================================== REDUX SECTION ====================================

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
	return {
		data: global_state.supportFormData
	};
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
	return {
		submitFormHandler: (local_state) =>
			dispatch({
				type: actionTypes.SUPPORT_FORM_SUBMIT,
				payload: {
					message: local_state.message,
					category: local_state.category,
					email: local_state.email
				}
			})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Support);
