import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import './ProductDetail.css';

const productDetail = (props) => {
	let { prodId } = useParams(); // gets from path parameter, name must be the same for defined path and variable

	const product = props.products.filter((item) => item.id === prodId);

	return (
		<Container>
			{product.map((item) => (
				<div>
					<Breadcrumb className="breadcrumb">
						<LinkContainer to="/">
							<Breadcrumb.Item>Home</Breadcrumb.Item>
						</LinkContainer>
						<LinkContainer to="/products">
							<Breadcrumb.Item>Products</Breadcrumb.Item>
						</LinkContainer>
						<Breadcrumb.Item active>Data</Breadcrumb.Item>
					</Breadcrumb>

					<Row key={item.id}>
						<Col>
							<img src={item.imgUrl} className="img-fluid" alt="introImage" width="520" />
						</Col>
						<Col>
							<h1>{item.name}</h1>
							<h4> S${item.price}</h4>
							<p>{item.desc}</p>
						</Col>
					</Row>
				</div>
			))}
		</Container>
	);
};

export default productDetail;
