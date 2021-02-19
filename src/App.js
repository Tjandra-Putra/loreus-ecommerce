import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Container>
					<Home />
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
