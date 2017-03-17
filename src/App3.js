/**
 * I learned about, how to handle the components in other components, thus child components
 */

import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			text: "This is the state text"
		}
		this.update = this.update.bind(this);
	}

	//update the state with the current property
	//in the given context
	update(e){
		//set the new state and get the target value
		this.setState({text: e.target.value});
	}

	getContext(){
		return this;
	}

	render(){
		return (
			<div>
				<MyWidget update={this.update}/>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

// components As lambda functions
const MyWidget = (props) =>
		<input type="text" onChange={props.update}/>

// class MyWidget extends React.Component{
// 	render(){
// 		<input type="text" onChange={this.props.update} value="this.props.text"/>
// 	}
// }

export default App