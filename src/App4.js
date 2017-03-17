/**
 * I learned how to access to nested data
 */

import React from 'react';

class App extends React.Component{
	render(){
		return <Button>I <Hearth /> React</Button>
	}
}

//with prop children you can acces to the value of one component
const Button = (props) => 
	<button>{props.children}</button>

class Hearth extends React.Component{
	render(){
		return <span>&hearts;</span>
	}
}

export default App