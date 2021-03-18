import React from 'react';
import { Container, Row, Col, Toast, Button, Breadcrumb, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';

import './ProductDetail.css';
import * as actionTypes from '../../../../store/actions';

const productDetail = (props) => {
	let { prodId } = useParams(); // gets from path parameter, name must be the same for defined path and variable

	const product = props.products.filter((item) => item.id === prodId);

	const [ show, setShow ] = useState(false);

	const toastMsg = () => {
		return (
			<React.Fragment>
				<div
					style={{
						position: 'relative',
						zIndex: '999'
					}}
				>
					<Toast
						onClose={() => setShow(false)}
						show={show}
						delay={5000}
						autohide
						style={{
							position: 'absolute',
							top: 0,
							right: 0
						}}
					>
						<Toast.Header>
							<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
							<div className="mr-auto toast-title pl-3">
								<i className="fas fa-check-circle text-success" /> Added to Bag
							</div>
						</Toast.Header>
						<Toast.Body>
							{product.map((item) => (
								// <div>
								// 	<span className="font-weight-bold">{item.name}</span> has been added to your cart.
								// </div>
								<Table borderless hover>
									<thead>
										<tr>
											<th />
											<th />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<img src={item.imgUrl} className="img-fluid" width="40" />
											</td>
											<td>
												{item.name} <br />
												S${item.price}
											</td>
										</tr>
									</tbody>
								</Table>
							))}
							<div class="d-flex justify-content-center">
								<div class="p-2 bd-highlight">
									<Button
										className=""
										variant="outline-dark"
										id="btn-favourite"
										size="lg"
										block
										style={{ fontSize: '17px' }}
									>
										View Bag ({props.addedItem.length})
									</Button>
								</div>
								<div class="p-2 bd-highlight">
									<Button
										className="px-4"
										variant="dark"
										id="btn-favourite"
										size="lg"
										block
										style={{ fontSize: '17px' }}
									>
										Checkout
									</Button>
								</div>
							</div>
						</Toast.Body>
					</Toast>
				</div>
			</React.Fragment>
		);
	};

	return (
		<Container className="product-detail">
			{product.map((item) => (
				<div>
					{toastMsg()}

					<div key={item.id}>
						<Breadcrumb className="breadcrumb">
							<LinkContainer to="/">
								<Breadcrumb.Item className="breadcrumb-item">Home</Breadcrumb.Item>
							</LinkContainer>
							<LinkContainer to="/products">
								<Breadcrumb.Item className="breadcrumb-item">Products</Breadcrumb.Item>
							</LinkContainer>
							<Breadcrumb.Item active>{item.name}</Breadcrumb.Item>
						</Breadcrumb>

						<Row>
							<Col xs={12} md={6}>
								<img src={item.imgUrl} className="img-fluid" alt="introImage" width="520" />
							</Col>
							<Col xs={12} md={6}>
								<h6 style={{ fontWeight: '500 ', color: 'rgb(250, 84, 0)' }}>{item.productMsgInfo}</h6>
								<h2>{item.name}</h2>
								<h5 style={{ fontWeight: '500 ' }}> S${item.price}</h5>
								<p>{item.desc}</p>

								<div className="container-buttons">
									<Button
										className="py-3"
										variant="dark"
										id="btn-add"
										size="lg"
										block
										onClick={() => {
											props.addToCart(item);
											setShow(true);
										}}
									>
										Add to bag
									</Button>
									<Button className="py-3" variant="outline-dark" id="btn-favourite" size="lg" block>
										Favourite <i className="far fa-heart" style={{ fontSize: '18px' }} />
									</Button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			))}
		</Container>
	);
};

// ==================================== REDUX SECTION ====================================

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
	return {
		addedItem: global_state.selectedItems
	};
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) =>
			dispatch({
				type: actionTypes.ADD_TO_CART,
				product: item
			})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(productDetail);
