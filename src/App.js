import React from "react";

/**
 * Learning how to handle properties
 */

class App extends React.Component{
  render(){
    let text = this.props.text
    return <h1>{text}</h1>
  }
}

//appending types to prototypes
App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

//appending default values for prototypes
App.defaultProps = {
  text: "This is the default text"
}

export default App