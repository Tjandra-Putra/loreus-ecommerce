import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Product from '../../components/Products/Product/Product';

const products = () => {
	const all_products = [
		{
			id: '1',
			name: 'product_1',
			desc: 'product_1 desc',
			price: 26,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '2',
			name: 'product_2',
			desc: 'product_2 desc',
			price: 78,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '3',
			name: 'product_3',
			desc: 'product_3 desc',
			price: 123,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '4',
			name: 'product_4',
			desc: 'product_4 desc',
			price: 63,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		}
	];
	return (
		<Container>
			<Row>
				{all_products.map((product) => (
					<Col xs={12} sm={6} md={4} lg={4} key={product.id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default products;
