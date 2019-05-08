import React, { Component } from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import AllTasks from "../AllTasks/AllTasks";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import NewTasks from "../NewTasks/NewTasks";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    taskText: ""
  };

  deleteTask = key => {
    const newTasks = this.state.tasks.filter(task => task.key !== key);
    this.setState({ tasks: newTasks });
  };

  checkLikeDone = key => {
    const newTasks = this.state.tasks.map(task =>
      task.key !== key
        ? task
        : { text: task.text, done: !task.done, key: task.key }
    );
    this.setState({ tasks: newTasks });
  };

  handleInputChange = e => {
    const target = e.target;
    this.setState({
      taskText: target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    const newTask = { text: this.state.taskText, done: false, key: Date.now() };
    if (newTask.text !== "") {
      this.setState({ tasks: [...this.state.tasks, newTask], taskText: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ToDoMenu
            addTask={this.addTask}
            handleInputChange={this.handleInputChange}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <AllTasks
                  tasks={this.state.tasks}
                  checkLikeDone={this.checkLikeDone}
                  deleteTask={this.deleteTask}
                />
              )}
            />
            <Route
              path="/new"
              exact
              render={() => (
                <NewTasks
                  tasks={this.state.tasks}
                  checkLikeDone={this.checkLikeDone}
                  deleteTask={this.deleteTask}
                />
              )}
            />
            <Route
              path="/completed"
              exact
              render={() => (
                <CompletedTasks
                  tasks={this.state.tasks}
                  checkLikeDone={this.checkLikeDone}
                  deleteTask={this.deleteTask}
                />
              )}
            />
          </Switch>
          <ul className="d-flex">
            <li>
              <NavLink to="/" exact>
                All Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/new">New Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/completed">Completed Tasks</NavLink>
            </li>
          </ul>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
