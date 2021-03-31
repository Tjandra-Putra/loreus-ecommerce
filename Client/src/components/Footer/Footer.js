import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import instagram_icon from '../../assets/Image/instagram_icon.png';
import facebook_icon from '../../assets/Image/facebook_icon.png';
import twitter_icon from '../../assets/Image/twitter_icon.png';
import pinterest_icon from '../../assets/Image/pinterest_icon.png';

const footer = () => (
	<footer>
		<Container>
			<Row>
				<Col xs={6} md={3}>
					<h6 className="mb-4">ABOUT THE STORE</h6>
					<p>
						There are many variations of passages of Lor available, but the majority have suffered
						alteration in some form.
					</p>
				</Col>
				<Col xs={6} md={3}>
					<h6 className="mb-4">CUSTOMER SERVICE</h6>
					<p>CONTACT US</p>
					<p>RETURN & REFUND</p>
					<p>TERMS & CONDITIONS</p>
					<p>ONLINE STORE</p>
				</Col>
				<Col xs={6} md={3}>
					<h6 className="mb-4">PROFILE</h6>
					<p>MY ACCOUNT</p>
					<p>CHECKOUT</p>
					<p>HELP</p>
					<p>SUPPORT</p>
				</Col>
				<Col xs={6} md={3}>
					<h6 className="mb-4">CONNECT WITH US</h6>
					<div className="d-flex flex-row bd-highligh">
						<div className="pr-2 bd-highlight">
							<img src={instagram_icon} className="img-fluid" alt="instagram_icon" />
						</div>
						<div className="pr-2 bd-highlight">
							<img src={facebook_icon} className="img-fluid" alt="facebook_icon" />
						</div>
						<div className="pr-2 bd-highlight">
							<img src={twitter_icon} className="img-fluid" alt="twitter_icon" />
						</div>
						<div className="pr-2 bd-highlight">
							<img src={pinterest_icon} className="img-fluid" alt="pinterest_icon" />
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="font-weight-bold">&#169; 2021 LOREUS</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default footer;
