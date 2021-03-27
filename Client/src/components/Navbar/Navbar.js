import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import './Navbar.css';
import heartImg from '../../assets/Image/heart.png';
import bagImg from '../../assets/Image/shopping-bag.png';
import userImg from '../../assets/Image/user.png';

import { LinkContainer } from 'react-router-bootstrap';

const navbar = (props) => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light" className="Navbar py-4">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand className="brand">
						LOREUS<span className="text-danger">.</span>
					</Navbar.Brand>
				</LinkContainer>
				<LinkContainer to="/cart">
					<Nav.Link className="d-sm-block d-lg-none d-md-none" id="toggle-cart">
						<img src={bagImg} className="img-fluid" alt="introImage" width="25" />
						<div className="quantity">{props.selectedItems.length}</div>
					</Nav.Link>
				</LinkContainer>
				<Nav.Link to="/favourite" className="d-sm-block d-lg-none d-md-none" id="toggle-favourite">
					<img src={heartImg} className="img-fluid" alt="introImage" width="25" />
				</Nav.Link>
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
						<LinkContainer to="/support">
							<Nav.Link className="mx-2 nav-link" to="/contact">
								SUPPORT
							</Nav.Link>
						</LinkContainer>
					</ul>
					<ul className="navbar-nav ml-auto nav-icons">
						<Nav.Link to="/favourite" className="d-none d-sm-block">
							<img src={heartImg} className="img-fluid" alt="introImage" width="25" />
						</Nav.Link>
						<LinkContainer to="/cart">
							<Nav.Link className="d-none d-sm-block">
								<img src={bagImg} className="img-fluid" alt="introImage" width="25" />
								<div className="quantity">{props.selectedItems.length}</div>
							</Nav.Link>
						</LinkContainer>
						{/* <Nav.Link to="/login" className="d-none d-sm-block">
							<img src={userImg} className="img-fluid" alt="introImage" width="25" />
						</Nav.Link> */}

						<NavDropdown
							title={<img src={userImg} className="img-fluid" alt="introImage" width="25" />}
							id="dropdown-basic"
						>
							<LinkContainer to="/login">
								<NavDropdown.Item>Sign In</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/register">
								<NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
						</NavDropdown>
					</ul>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

// ==================================== REDUX SECTION ====================================

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
	return {
		selectedItems: global_state.selectedItems
	};
};

export default connect(mapStateToProps)(navbar);
