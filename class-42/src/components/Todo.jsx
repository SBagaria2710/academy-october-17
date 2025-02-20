import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
    console.log("Constructor: Setting up initial state");
  }

  componentDidMount() {
    console.log("Component Did Mount: Fetching initial to-do items");

    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({
        todos: ["Learn React", "Complete LLD2 & LLD3 assignments"],
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update: Checking if new todo was added", {
      old: prevState.todos,
      new: this.state.todos,
    });

    if (prevState.todos !== this.state.todos) {
      console.log("Updated To-Dos:", this.state.todos);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount: Cleaning up resources");
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: "",
    });
  };

  render() {
    console.log("Render: Rendering the to-do list");
    return (
      <div>
        <h1>To-Do List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
