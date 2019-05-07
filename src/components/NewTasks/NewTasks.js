import React, { Component } from "react";

class NewTasks extends Component {
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
    let taskList = this.props.tasks.filter(task => !task.done);
    taskList = taskList.map(this.confirmTasks);
    return <ul>{taskList}</ul>;
  }
}

export default NewTasks;
