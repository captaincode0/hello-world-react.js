import React from 'react';

class TimerComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			seconds_elapsed: 0
		};
	}

	tick(){
		this.setState((prev_state) => ({
			seconds_elapsed: prev_state.seconds_elapsed+1 
		}));
	}

	componentDidMount(){
		this.interval = setInterval(() => this.tick, 1000);
	}

	componentWillMount(){
		clearInterval(this.interval);
	}

	render(){
		return (
			<h1>Seconds Elapsed: {this.state.seconds_elapsed}</h1>
		)
	}
}

export default TimerComponent