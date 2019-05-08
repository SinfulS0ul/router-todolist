import React, { Component } from "react";
import { Task } from "../Task/Task";

class AllTasks extends Component {
  render() {
    const taskList = this.props.tasks.map(task => (
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

export default AllTasks;
