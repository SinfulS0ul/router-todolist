import React, { Component } from "react";
import { Task } from "../Task/Task";

class NewTasks extends Component {
  render() {
    let taskList = this.props.tasks.filter(task => !task.done);
    taskList = taskList.map(task => (
      <Task
        key={task.key}
        task={task}
        checkLikeDone={this.props.checkLikeDone}
        deleteTask={this.props.deleteTask}
      />
    ));
    return <ul>{taskList}</ul>;
  }
}

export default NewTasks;
