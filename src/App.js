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
			desc: 'product_1 desc',
			price: 26,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '2',
			name: 'product_2',
			desc: 'product_2 desc',
			price: 78,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '3',
			name: 'product_3',
			desc: 'product_3 desc',
			price: 123,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: '4',
			name: 'product_4',
			desc: 'product_4 desc',
			price: 63,
			imgUrl:
				'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		}
	];

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/products">
						<Products products={this.all_products} />
					</Route>
					<Route Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/products/:prodId">
						<ProductDetail products={this.all_products} />
					</Route>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
