import './App.css';
import React from 'react';
import { BrandTitle } from 'components';

import logo from './logo.svg';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Facebook App</h1>
				<BrandTitle>Hello World</BrandTitle>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
