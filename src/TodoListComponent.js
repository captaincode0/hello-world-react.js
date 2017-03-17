import React from 'react';

/**
 * @class: TodoListComponent
 * @classdesc: a representation of todo list component
 */
class TodoListComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {items: [], text: ''};
	}

	render(){
		return (
			<div>
				<h3>TODO List</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} value={this.state.text}/>
					<button>{'Add task #'+(this.state.items.length+1)}</button>
				</form>
			</div>
		);
	}

	handleChange(e){
		//change the text state
		this.setState({text: e.target.value});
	}

	handleSubmit(e){
		//prevent submit event from the form
		e.preventDefault();

		var new_item = {
			text: this.state.text,
			id: Date.now()
		};

		this.setState((prev_state) => ({
			items: prev_state.items.concat(new_item),
			text: ''
		}));
	}
}

//As lambda function
const TodoList = (props) => 
	(
		<ul>
			{props.items.map(item => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);

/**
 * @class: TodoList
 * @classdesc: represents the current list
 */
// class TodoList extends React.Component{
// 	render(){
// 		return (
// 			<ul>
// 				{this.props.items.map(item => (
// 					<li key={item.id}>{item.text}</li>
// 				))}
// 			</ul>
// 		);
// 	}
// }