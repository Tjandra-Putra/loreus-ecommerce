import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/Products/Product/ProductDetail/ProductDetail';

class App extends Component {
	all_products = [
		{
			id: '1',
			name: 'product_1',
			desc:
				'product_1 desc Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea ',
			price: 26.45,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '2',
			name: 'product_2',
			desc: 'product_2 desc',
			price: 78.25,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '3',
			name: 'product_3',
			desc: 'product_3 desc',
			price: 123.11,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			productMsgInfo: 'Just In'
		},
		{
			id: '4',
			name: 'product_4',
			desc: 'product_4 desc',
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
		productObject.quantity = 0;

		let array = [ ...this.state.selectedItems ];
		array.push(productObject);

		// update total price
		const oldTotalPrice = this.state.totalPrice;
		const newTotalPrice = oldTotalPrice + productObject.price;

		this.setState({ selectedItems: array, totalPrice: newTotalPrice });

		console.log(this.state.selectedItems);
		console.log(this.state.selectedItems.length);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar quantity={this.state.selectedItems.length}/>
					<Route exact path="/" component={Home} />
					<Route exact path="/products">
						<Products products={this.all_products} />
					</Route>
					<Route Route exact path="/cart">
						<Cart selectedItems={this.state.selectedItems} totalPrice={this.state.totalPrice} />
					</Route>
					<Route exact path="/products/:prodId">
						<ProductDetail products={this.all_products} addToCart={this.addToCartHandler} />
					</Route>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
