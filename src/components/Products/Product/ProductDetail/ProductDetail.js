import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import './ProductDetail.css';

const productDetail = (props) => {
	let { prodId } = useParams(); // gets from path parameter, name must be the same for defined path and variable

	const product = props.products.filter((item) => item.id === prodId);

	let btnDisable = false;

	const isAddedToCart = () => {
		if (props.selectedItems((item) => item.id === prodId)) {
			btnDisable = true;
		}
	};

	return (
		<Container>
			{product.map((item) => (
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
									onClick={() => props.addToCart(item)}
									disabled={btnDisable}
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
			))}
		</Container>
	);
};

export default productDetail;
