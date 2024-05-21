// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false
    };
  }

  setToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  incrementCounter = () => {
    if (this.state.toggle) {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }
  }

  render() {
    console.log("This is Simple Component");
    return (
      <div>
        <h1>Simple Component</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.setToggle}>Set toggle</button>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
