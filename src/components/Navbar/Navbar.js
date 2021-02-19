import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import heartImg from '../../assets/Image/heart.png';
import bagImg from '../../assets/Image/shopping-bag.png';
import userImg from '../../assets/Image/user.png';

const navbar = () => (
	<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="Navbar py-4">
		<Container>
			<Navbar.Brand href="#home" className="font-weight-bold">
				LOREUS.
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<ul className="navbar-nav mr-auto">
					<Nav.Link className="mx-2 nav-link" href="#features">
						HOME
					</Nav.Link>
					<Nav.Link className="mx-2 nav-link" href="#pricing">
						SHOP
					</Nav.Link>
					<Nav.Link className="mx-2 nav-link" href="#features">
						COLLECTION
					</Nav.Link>
					<Nav.Link className="mx-2 nav-link" href="#features">
						BLOG
					</Nav.Link>
					<Nav.Link className="mx-2 nav-link" href="#features">
						PAGES
					</Nav.Link>
				</ul>
				<ul className="navbar-nav ml-auto">
					<Nav.Link href="#deets">
						<img src={heartImg} className="img-fluid" alt="introImage" width="20" />
					</Nav.Link>
					<Nav.Link href="#deets">
						<img src={bagImg} className="img-fluid" alt="introImage" width="20" />
					</Nav.Link>
					<Nav.Link href="#memes">
						<img src={userImg} className="img-fluid" alt="introImage" width="20" />
					</Nav.Link>
				</ul>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default navbar;
