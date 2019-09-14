import React from 'react';
import { BrandButton } from 'components';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Messenger App</h1>
				<BrandButton>Some Label</BrandButton>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
