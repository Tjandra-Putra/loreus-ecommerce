import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import heartImg from '../../assets/Image/heart.png';
import bagImg from '../../assets/Image/shopping-bag.png';
import userImg from '../../assets/Image/user.png';

import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const navbar = (props) => {
	const { location } = props;

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar py-4">
			<Nav activeKey={location.pathname}>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand className="font-weight-bold">
							LOREUS<span className="text-danger">.</span>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<ul className="navbar-nav mr-auto">
							<LinkContainer to="/products">
								<Nav.Link className="mx-2 nav-link">SHOP</Nav.Link>
							</LinkContainer>
							<Nav.Link className="mx-2 nav-link" to="/collection">
								COLLECTION
							</Nav.Link>
							<Nav.Link className="mx-2 nav-link" to="/blog">
								BLOG
							</Nav.Link>
							<Nav.Link className="mx-2 nav-link" to="/pages">
								PAGES
							</Nav.Link>
						</ul>
						<ul className="navbar-nav ml-auto">
							<Nav.Link to="/favourite">
								<img src={heartImg} className="img-fluid" alt="introImage" width="20" />
							</Nav.Link>
							<LinkContainer to="/cart">
								<Nav.Link>
									<img src={bagImg} className="img-fluid" alt="introImage" width="20" />
								</Nav.Link>
							</LinkContainer>
							<Nav.Link to="/login">
								<img src={userImg} className="img-fluid" alt="introImage" width="20" />
							</Nav.Link>
						</ul>
					</Navbar.Collapse>
				</Container>
			</Nav>
		</Navbar>
	);
};

export default withRouter(navbar);
