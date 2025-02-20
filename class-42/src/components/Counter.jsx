import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrement
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
