import React from 'react';
import { Container, Row, Col, Alert, Button, Table, DropdownButton, Dropdown } from 'react-bootstrap';
import './Cart.css';

const cart = (props) => {
	let loadedProducts = props.selectedItems.map((item) => (
		<tr key={item.id} className="border-bottom">
			<td>
				<img src={item.imgUrl} className="img-fluid" alt="introImage" width="100" />
			</td>
			<td>{item.name}</td>
			<td>
				<div className="d-flex flex-row bd-highlight mb-3">
					<div className="bd-highlight">
						<DropdownButton
							id="dropdown-basic-button"
							title="Quantity"
							onSelect={(event) => props.editQuantityHandler(event, item.id)}
						>
							<Dropdown.Item eventKey="1">1</Dropdown.Item>
							<Dropdown.Item eventKey="2">2</Dropdown.Item>
							<Dropdown.Item eventKey="3">3</Dropdown.Item>
						</DropdownButton>
					</div>
					<div className="pl-2 bd-highlight">{item.quantity}</div>
				</div>
			</td>
			<td>S${item.price}</td>
			<td className="btn-remove">Remove</td>
		</tr>
	));

	if (loadedProducts.length === 0) {
		loadedProducts = <p>There are no items in your bag.</p>;
	}

	// const editQuantityHandler = (event) => {
	// 	props.selectedItems.map((item) => {
	// 		item.quantity = event;
	// 	});
	// 	console.log(event);
	// };

	return (
		<Container>
			<Alert variant="dark" dismissible style={{ backgroundColor: 'rgb(247, 247, 247)', border: 'none' }}>
				HAVE A PROMO CODE? You will be able to apply it on the payment page during checkout.
			</Alert>
			<Row>
				<Col md={8} className="">
					<h5>Bag</h5>

					<Table borderless hover>
						<tbody>{loadedProducts}</tbody>
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
