import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/cart" component={Cart} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
