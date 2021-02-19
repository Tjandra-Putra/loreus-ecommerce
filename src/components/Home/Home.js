import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import introLogo from '../../assets/Image/intro-image.png';
import featured_1 from '../../assets/Image/featured_1.png';
import featured_2 from '../../assets/Image/featured_2.png';
import featured_3 from '../../assets/Image/featured_3.png';
import featured_4 from '../../assets/Image/featured_4.png';
import featured_5 from '../../assets/Image/featured_5.png';
import featured_6 from '../../assets/Image/featured_6.png';
import trending_1 from '../../assets/Image/trending_1.jpg';
import trending_2 from '../../assets/Image/trending_2.jpg';

const home = () => (
	<div>
		<div className="hero">
			<Row>
				<Col className="p-0" xs={12} md={6}>
					<div className="left-area">
						<p className="sub-title m-0">Spring - Summer 2021</p>
						<div className="title">FLASH SALE OF 70%</div>
						<p className="description">
							Fashion is part of the daily air and it changes all the time, with all the events. You can
							see and feel everything in clothes. Start shopping now to enjoy exclusive offers!
						</p>

						<Button variant="outline-dark" id="btn-intro">
							Shop Now
						</Button>
					</div>
				</Col>
				<Col className="p-0" xs={12} md={6}>
					<div className="right-area">
						<img src={introLogo} className="img-fluid" alt="introImage" width="520" />
					</div>
				</Col>
			</Row>
		</div>

		<div className="featured">
			<Row>
				<Col className="text-center">
					<h2>New look ready for the summer</h2>
					<div className="featured-description">
						Enjoy the modern design, which corresponds with the latest summer fashion trends.
					</div>
				</Col>
			</Row>
			<Row className="featured-product-wrapper">
				<Col>
					<div className="featured-box text-center">
						<img src={featured_1} className="img-fluid" alt="introImage" />
						<div>
							<div className="product-title">Color-washed shirt</div>
							<div className="product-price">S$30.99</div>
						</div>
					</div>
				</Col>
				<Col>
					<div className="featured-box text-center">
						<img src={featured_2} className="img-fluid" alt="introImage" />
						<div>
							<div className="product-title">Color-washed shirt</div>
							<div className="product-price">S$30.99</div>
						</div>
					</div>
				</Col>
				<Col>
					<div className="featured-box text-center">
						<img src={featured_3} className="img-fluid" alt="introImage" />
						<div>
							<div className="product-title">Color-washed shirt</div>
							<div className="product-price">S$30.99</div>
						</div>
					</div>
				</Col>
				<Col>
					<div className="featured-box text-center">
						<img src={featured_4} className="img-fluid" alt="introImage" />
						<div>
							<div className="product-title">Color-washed shirt</div>
							<div className="product-price">S$30.99</div>
						</div>
					</div>
				</Col>
				<Col>
					<div className="featured-box text-center">
						<img src={featured_5} className="img-fluid" alt="introImage" />
						<div>
							<div className="product-title">Color-washed shirt</div>
							<div className="product-price">S$30.99</div>
						</div>
					</div>
				</Col>
			</Row>

			<div className="text-center">
				<Button variant="outline-dark" id="featured-button">
					Show More
				</Button>
			</div>
		</div>

		<div className="best-seller">
			<Row>
				<Col>
					<h2>Trending</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<img src={trending_1} className="img-fluid trending-img" alt="introImage" />
					<div class="bottom-left-btn">
						<div className="botton-left-title">Abigail Hoodie Summer</div>
						<Button variant="light" className="btn-trending">
							Shop Now
						</Button>
					</div>
				</Col>
				<Col>
					<img src={trending_2} className="img-fluid trending-img" alt="introImage" />
					<div class="bottom-left-btn">
						<div className="botton-left-title">Abigail Engineered 23</div>
						<Button variant="light" className="btn-trending">
							Shop Now
						</Button>
					</div>
				</Col>
			</Row>
		</div>

		<div className="news-letter text-center">
			<Row>
				<Col>
					<h2>News Letter</h2>
					<div className="news-letter-description">Get timely updates from your favorite products </div>

					<div className="news-letter-wrapper">
						<Row>
							<Col md={8} className="p-0">
								<Form.Group>
									<Form.Control
										size="lg"
										type="text"
										placeholder="Enter your email"
										className="d-inline form-input float-right btn-news-letter"
									/>
								</Form.Group>
							</Col>
							<Col md={4} className="p-0">
								<Button variant="dark" size="lg" className="d-inline float-left ml-2 btn-news-letter">
									SUBSCRIBE
								</Button>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</div>
	</div>
);

export default home;
