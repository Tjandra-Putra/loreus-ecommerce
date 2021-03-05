import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

// Lazy Loading - Suspense, Fallback, render. This is to enhance performance.
const Support = React.lazy(() => import('./components/Support/Support'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const Products = React.lazy(() => import('./components/Products/Products'));
const Checkout = React.lazy(() => import('./components/Checkout/Checkout'));
const ProductDetail = React.lazy(() => import('./components/Products/Product/ProductDetail/ProductDetail'));

class App extends Component {
	all_products = [
		{
			id: '1',
			name: 'product_1',
			desc:
				"product_1 The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that puts a Valentine's Day spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. The embossed words  form the Swoosh designs, while little lockets of creativity throughout reveal your love for style and detail.",
			price: 26.45,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '2',
			name: 'product_2',
			desc:
				'product_2 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 78.25,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '3',
			name: 'product_3',
			desc:
				'product_3 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 123.11,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '4',
			name: 'product_4',
			desc:
				'product_4 The Nike Air Force 1 Shadow SE puts a playful twist on a classic b-ball design. Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold look. The pixelated Swoosh designs add fresh expressions to the branding, while the holographic details level up your look.',
			price: 63,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		}
	];

	state = {
		selectedItems: [], // contains a list of objects
		totalPrice: 0
	};

	addToCartHandler = (productObject) => {
		// Default value of quantity is 1 when cart is empty
		if (this.state.selectedItems.length === 0) {
			productObject.quantity = 1;
		}

		// if item has already been added to shopping cart, only updates the quantity
		if (this.state.selectedItems.some((item) => item.id === productObject.id)) {
			const itemIndex = this.state.selectedItems.findIndex((item) => {
				return item.id === productObject.id;
			});

			productObject.quantity += 1;

			const itemArray = [ ...this.state.selectedItems ];
			itemArray[itemIndex] = productObject;

			this.setState({ selectedItems: itemArray });
		} else {
			// Adding new items to shopping cart
			productObject.quantity = 1;
			let array = [ ...this.state.selectedItems ];
			array.push(productObject);

			this.setState({ selectedItems: array });

			console.log(this.state.selectedItems);
			console.log(this.state.selectedItems.length);
		}

		console.log(this.state.selectedItems);
	};

	editQuantityHandler = (event, itemId) => {
		// index value of item
		const itemIndex = this.state.selectedItems.findIndex((item) => {
			return item.id === itemId;
		});

		const itemObj = { ...this.state.selectedItems[itemIndex] };

		itemObj.quantity = event;

		const itemArray = [ ...this.state.selectedItems ];
		itemArray[itemIndex] = itemObj;

		this.setState({ selectedItems: itemArray });

		console.log(event, this.state.selectedItems);
	};

	removeCartItemHandler = (itemIndex) => {
		const allItems = [ ...this.state.selectedItems ];
		allItems.splice(itemIndex, 1);
		this.setState({ selectedItems: allItems });
	};

	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Navbar quantity={this.state.selectedItems.length} />

					<Switch>
						{/* Default Path */}
						<Route exact path="/" component={Home} />
						
						<Route
							exact
							path="/products"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<Products products={this.all_products} />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/cart"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<Cart
										selectedItems={this.state.selectedItems}
										totalPrice={this.state.totalPrice}
										editQuantityHandler={this.editQuantityHandler}
										removeCartItemHandler={this.removeCartItemHandler}
									/>
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/checkout"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<Checkout />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/support"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<Support />
								</Suspense>
							)}
						/>

						<Route
							exact
							path="/products/:prodId"
							render={() => (
								<Suspense fallback={<div>Loading...</div>}>
									<ProductDetail products={this.all_products} addToCart={this.addToCartHandler} />
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
