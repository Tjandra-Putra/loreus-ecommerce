import React from 'react';
import { Container, Row, Col, Form, Breadcrumb, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Checkout.css';

const checkOut = () => {
	return (
		<React.Fragment>
			<Container fluid className="mx-0 p-0">
				<div className="checkout-banner text-center text-white">
					<h1 style={{ fontWeight: '500', paddingTop: '5.2vh' }}>CHECKOUT</h1>
				</div>
				<Container>
					<main className="mt-5">
						<div className="personal-details">
							<Row>
								<Col md={6} xm={12}>
									<Breadcrumb className="breadcrumb">
										<LinkContainer to="/cart">
											<Breadcrumb.Item className="breadcrumb-item">Cart</Breadcrumb.Item>
										</LinkContainer>
										<Breadcrumb.Item active>Checkout</Breadcrumb.Item>
									</Breadcrumb>
								</Col>
								<Col d={6} xm={12}>
									<p className="float-right" style={{ color: 'rgb(250, 84, 0)', fontWeight: '500' }}>
										view summary
									</p>
								</Col>
							</Row>
							<Row>
								<Col md={4} xm={12}>
									<small className="font-weight-bold text-orange">01</small>
									<h5 style={{ fontWeight: '600' }}>PERSONAL DETAILS</h5>
								</Col>
								<Col md={4} xm={12} className="pt-4">
									<Form.Group>
										<Form.Label className="text-muted">First name</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
									<Form.Group>
										<Form.Label className="text-muted">Email address</Form.Label>
										<Form.Control type="email" />
									</Form.Group>
								</Col>
								<Col md={4} xm={12} className="pt-4">
									<Form.Group>
										<Form.Label className="text-muted">Last Name</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
									<Form.Group>
										<Form.Label className="text-muted">Phone number</Form.Label>
										<Form.Control type="text" />
									</Form.Group>
								</Col>
							</Row>
						</div>

						<div className="shipping-details">
							<Row className="mt-5">
								<Col md={4} xm={12}>
									<small className="font-weight-bold text-orange">02</small>
									<h5 style={{ fontWeight: '600' }}>SHIPPING DETAILS</h5>
								</Col>
								<Col md={8} xm={12}>
									<h6 className="pt-4">Shipping address</h6>
									<Form.Group>
										<Form.Label className="text-muted pt-3">Street Address</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Row>
										<Col md={4} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">Zip code</Form.Label>
												<Form.Control type="text" />
											</Form.Group>
										</Col>
										<Col md={4} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">City</Form.Label>
												<Form.Control type="text" />
											</Form.Group>
										</Col>
										<Col md={4} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">Country</Form.Label>
												<Form.Control as="select">
													<option>Select country</option>
													<option>Singapore</option>
													<option>Malaysia</option>
													<option>Others</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									{/* <Row>
                    <Col md={12} xm={12}>
                      <h6 className="pt-4">Shipping method</h6>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={6} xm={6}>
                      <div className="shipping-box">
                        <div class="d-flex justify-content-between">
                          <div class="p-3 bd-highlight">Ninja Van</div>
                          <div class="p-3 bd-highlight">
                            <Form.Label className="text-muted d-inline pr-2">
                              $3.99
                            </Form.Label>
                            <Form.Check
                              custom
                              type="radio"
                              className="d-inline"
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} xm={6}>
                      <div className="shipping-box">
                        <div class="d-flex justify-content-between">
                          <div class="p-3 bd-highlight">FedEx</div>
                          <div class="p-3 bd-highlight">
                            <Form.Label className="text-muted d-inline pr-2">
                              $4.99
                            </Form.Label>
                            <Form.Check
                              custom
                              type="radio"
                              className="d-inline"
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row> */}
								</Col>
							</Row>
						</div>

						<div classname="payment-details">
							<Row style={{ marginTop: '6vh' }}>
								<Col md={4} xm={12}>
									<small className="font-weight-bold text-orange">03</small>
									<h5 style={{ fontWeight: '600' }}>PAYMENT METHOD</h5>
								</Col>
								<Col md={8} xm={12}>
									<Row className="mt-4">
										<Col md={6} xm={6}>
											<div className="shipping-box">
												<div class="d-flex justify-content-between">
													<div class="p-3 bd-highlight">Payment</div>
													<div class="p-3 bd-highlight">
														<Form.Check custom type="radio" className="d-inline" />
													</div>
												</div>
											</div>
										</Col>
										<Col md={6} xm={6}>
											<div className="shipping-box">
												<div class="d-flex justify-content-between">
													<div class="p-3 bd-highlight">Credit or debit card</div>
													<div class="p-3 bd-highlight">
														<Form.Check custom type="radio" className="d-inline" />
													</div>
												</div>
											</div>
										</Col>
									</Row>
									<Row className="mt-4">
										<Col md={6} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">Card number</Form.Label>
												<Form.Control type="text" />
											</Form.Group>
										</Col>
										<Col md={3} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">Expiry date</Form.Label>
												<Form.Control type="date" />
											</Form.Group>
										</Col>
										<Col md={3} xm={12}>
											<Form.Group>
												<Form.Label className="text-muted">CVC/CVV</Form.Label>
												<Form.Control type="number" max="999" min="-999" />
											</Form.Group>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
						<Button variant="dark" size="lg" className="float-right mt-5">
							MAKE PAYMENT
						</Button>
					</main>
				</Container>
			</Container>
		</React.Fragment>
	);
};

export default checkOut;
