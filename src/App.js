import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Dashboard from './components/dashboard';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div> <Dashboard /> </div>
		);
	}
}

export default hot(module)(App);