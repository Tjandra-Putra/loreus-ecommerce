import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import './Cart.css';

const cart = (props) => {
	return (
		<Container>
			<Row>
				<Col md={8} className="">
					<h5>Bag</h5>

					<Table striped borderless hover>
						<thead>
							<tr>
								<td>No.</td>
								<td>Item</td>
								<td>Quantity</td>
								<td>Price</td>
							</tr>
						</thead>
						<tbody>
							{props.selectedItems.map((item, index) => (
								<tr key={index}>
									<td>{index}</td>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>S${item.price}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
				<Col md={4} className="">
					<h5>Summary</h5>
					<div className="d-flex justify-content-between mt-3">
						<div className="pr-2 bd-highlight">Subtotal</div>
						<div className="pr-2 bd-highlight">S${props.totalPrice.toFixed(2)}</div>
					</div>
					<div className="d-flex justify-content-between mt-3">
						<div className="pr-2 bd-highlight">Estimated Delivery & Handling</div>
						<div className="pr-2 bd-highlight">S$0.00</div>
					</div>
					<hr />
					<div className="d-flex justify-content-between mt-3">
						<div className="pr-2 bd-highlight">Total</div>
						<div className="pr-2 bd-highlight font-weight-bold">S${props.totalPrice.toFixed(2)}</div>
					</div>
					<hr />

					<Button variant="dark" id="btn-checkout" size="lg" block>
						Checkout
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default cart;
