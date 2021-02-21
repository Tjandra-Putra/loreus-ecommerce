import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const product = (props) => {
	return (
		<Container>
			<LinkContainer to={'/products/' + props.product.id}>
				<Card className="my-4">
					<Card.Img variant="top" src={props.product.imgUrl} />
					<Card.Body>
						<Card.Title>{props.product.name}</Card.Title>
						<Card.Text>{props.product.desc}</Card.Text>
						<Card.Text className="float-right">S${props.product.price}</Card.Text>
					</Card.Body>
				</Card>
			</LinkContainer>
		</Container>
	);
};

export default product;
