import React, { Component } from "react";

class ToDoMenu extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTask}>
          <input
            autoComplete="off"
            placeholder="Type a task"
            onChange={this.props.handleInputChange}
          />
          <button type="submit"> Add Task </button>
        </form>
      </div>
    );
  }
}

export default ToDoMenu;
