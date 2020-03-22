import React from 'react';
import Task from './components/task';
import TaskInput from './components/task.Input';
import {saveData, fetchData } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
        tasks: []
    }
  }

  componentDidMount() { // fetchData go to LoadData (get data or undef) and get request like
    fetchData.then(tasks => {
      this.setState({ tasks })// load saved data (if exist) before render (or old data)
    })
  }

  componentWillUpdate(nextProps, nextState) {
    saveData(nextState.tasks) // save new data right after refresh component
  }


  makeTaskDone = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  };

  deleteTask = (id) => {
      const tasks = this.state.tasks.filter(task => task.id !== id);
      this.setState({ tasks });
      return tasks;
  };

  addTask = (task) => {
      let { tasks } = this.state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      });
      this.setState(tasks);
      return tasks;
  };

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter( (task) => !task.done);
    const doneTasks = tasks.filter( (task) => task.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map( task => (
          <Task task={task} key={task.id}
            deleteTask = {() => this.deleteTask(task.id)}
            makeTaskDone = {() => this.makeTaskDone(task.id)}>
          </Task>)
        )}
        <TaskInput addTask = {this.addTask}> </TaskInput>
      </div>
    )
  }
}

export default App;
