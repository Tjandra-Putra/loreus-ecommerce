import React from 'react';
import { Container, Row, Col, Toast, Button, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';

import './ProductDetail.css';

const productDetail = (props) => {
	let { prodId } = useParams(); // gets from path parameter, name must be the same for defined path and variable

	const product = props.products.filter((item) => item.id === prodId);

	const [ show, setShow ] = useState(false);

	const toastMsg = () => {
		return (
			<div>
				<div
					style={{
						position: 'relative',
						zIndex: '999'
					}}
				>
					<Toast
						onClose={() => setShow(false)}
						show={show}
						delay={3000}
						autohide
						style={{
							position: 'absolute',
							top: 0,
							right: 0
						}}
					>
						<Toast.Header>
							<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
							<div className="mr-auto toast-title">
								<i className="fas fa-check-circle text-success" /> Added to Bag
							</div>
							{/* <small>11 mins ago</small> */}
						</Toast.Header>
						<Toast.Body>
							{product.map((item) => (
								<div>
									<span className="font-weight-bold">{item.name}</span> has been added to your cart.
								</div>
							))}
						</Toast.Body>
					</Toast>
				</div>
			</div>
		);
	};

	return (
		<Container>
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
								<h1>{item.name}</h1>
								<h4> S${item.price}</h4>
								<p>{item.desc}</p>

								<div className="container-buttons">
									<Button
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
									<Button variant="outline-dark" id="btn-favourite" size="lg" block>
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

export default productDetail;
