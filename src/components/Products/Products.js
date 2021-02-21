import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Product from '../../components/Products/Product/Product';

const products = (props) => (
	<Container>
		<Row>
			{props.products.map((product) => (
				<Col xs={12} sm={6} md={4} lg={4} key={product.id}>
					<Product product={product} />
				</Col>
			))}
		</Row>
	</Container>
);

export default products;
