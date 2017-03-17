/**
 * Learning how to handle states in React.js
 */

import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			text: "This is the state text",
			cat: 5
		}
	}

	//update the state with the current property
	//in the given context
	update(e){
		//set the new state and get the target value
		this.setState({text: e.target.value});
	}

	render(){
		return (
			<div>
				<input type="text" onChange={this.update.bind(this)}/>
				<h1>{this.state.text} - {this.state.cat}</h1>
			</div>
		)
	}
}

export default App