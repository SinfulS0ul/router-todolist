import React, { Component } from "react";

class AllTasks extends Component {
  confirmTasks = task => {
    return (
      <li key={task.key}>
        <span onClick={e => this.props.checkLikeDone(task.key)}>
          <button className="task-text">
            <span>{task.text}</span>
          </button>
        </span>
        <button onClick={e => this.props.deleteTask(task.key)}>x</button>
      </li>
    );
  };

  render() {
    const taskList = this.props.tasks.map(this.confirmTasks);
    return <ul>{taskList}</ul>;
  }
}

export default AllTasks;
