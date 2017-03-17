/**
 * Learning how to create one simple component
 */

import React from 'react';

class HelloWorldComponent extends React.Component{
	render(){
		//return <h1>Hello World</h1>
		
		//with React.createElement()
		//return React.createElement('h1', null, 'Hello World');
		
		return (
			<div>
				<h1>Hello World</h1>
				<b>My name is Diego</b>
			</div>
		)
	}
}

export default HelloWorldComponent;