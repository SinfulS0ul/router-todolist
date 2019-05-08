import React, { Component } from "react";

class ToDoMenu extends Component {
  render() {
    return (
      <div>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={this.props.addTask}
        >
          <input
            className="w-100"
            autoComplete="off"
            placeholder="Type a task"
            onChange={this.props.handleInputChange}
          />
          <button className="w-100 btn btn-success" type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default ToDoMenu;
