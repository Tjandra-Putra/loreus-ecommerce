import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Message from './components/Message/Message';
import Loader from './components/Loader/Loader';

// Lazy Loading - Suspense, Fallback, render. This is to enhance performance. Only when component is need, it will be used.
// === Normal === with no loader
// const Support = React.lazy(() => import("./components/Support/Support"));

// === With Loader ===
const Support = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Support/Support')), 400);
	});
});

const Cart = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Cart/Cart')), 400);
	});
});

const Products = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Products/Products')), 400);
	});
});

const Checkout = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Checkout/Checkout')), 400);
	});
});

const ProductDetail = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Products/Product/ProductDetail/ProductDetail')), 400);
	});
});

const Login = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Login/Login')), 400);
	});
});

const Register = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import('./components/Register/Register')), 400);
	});
});

class App extends Component {
	all_products = [
		{
			id: '1',
			name: 'Plaid Cami Bodycon',
			desc:
				"product_1 The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that puts a Valentine's Day spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. The embossed words  form the Swoosh designs, while little lockets of creativity throughout reveal your love for style and detail.",
			price: 26.45,
			imgUrl:
				'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/12/22/goods-img/1615155101416745523.jpg',
			productMsgInfo: 'Limited Stock'
		},
		{
			id: '2',
			name: 'Tie Shoulder Bow',
			desc:
				'product_2 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 78.25,
			imgUrl:
				'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2021/01/14/goods-img/1615154988441969106.jpg',
			productMsgInfo: 'Just In'
		},
		{
			id: '3',
			name: 'Dragon Print Oriental',
			desc:
				'product_3 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 123.11,
			imgUrl:
				'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/10/26/goods-img/1615154803003650150.jpg',
			productMsgInfo: 'Just In'
		},
		{
			id: '4',
			name: 'Spaghetti Strap Vanilla',
			desc:
				'product_4 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 63,
			imgUrl:
				'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/11/17/goods-img/1613599705946447191.jpg',
			productMsgInfo: 'Just In'
		}
	];

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					{/* <Message /> */}

					<Navbar />

					<Switch>
						{/* Default Path */}
						<Route exact path="/" component={Home} />

						<Route
							exact
							path="/products"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Products products={this.all_products} />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/cart"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Cart />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/checkout"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Checkout />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/support"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Support />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/login"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Login />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/register"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Register />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/products/:prodId"
							render={() => (
								<Suspense fallback={<Loader />}>
									<ProductDetail products={this.all_products} />
								</Suspense>
							)}
						/>

						<Route
							render={() => (
								<Container>
									<h1>Page Not Found</h1>
								</Container>
							)}
						/>
					</Switch>

					<Footer />
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
