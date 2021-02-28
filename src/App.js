import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/Products/Product/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Support from './components/Support/Support';

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
		selectedItems: [], // receives an object
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
		// index value
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
				<div className="App">
					<Navbar quantity={this.state.selectedItems.length} />
					<Route exact path="/" component={Home} />
					<Switch>
						<Route exact path="/products">
							<Products products={this.all_products} />
						</Route>
						<Route Route exact path="/cart">
							<Cart
								selectedItems={this.state.selectedItems}
								totalPrice={this.state.totalPrice}
								editQuantityHandler={this.editQuantityHandler}
								removeCartItemHandler={this.removeCartItemHandler}
							/>
						</Route>
						<Route exact path="/checkout">
							<Checkout />
						</Route>
						<Route exact path="/support">
							<Support />
						</Route>
						<Route exact path="/products/:prodId">
							<ProductDetail products={this.all_products} addToCart={this.addToCartHandler} />
						</Route>
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
