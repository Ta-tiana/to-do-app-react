import React from "react";

class TaskInput extends React.Component {

  constructor(props) {
    super(props);

     this.state = {
       input: ''
     };
  }

  addTask = () => {
    const {input} = this.state;
    if (input) {
      this.props.addTask(input);//set input val in props
      this.setState({input: ''});//clear input val
    }
  };

  inputChange = (event) => {
    this.setState({input: event.target.value});
  };

  pressEnter = (event) => {
    if (event.key === 'Enter') {
      this.addTask();
    }
  };

  render() {
    const {input} = this.state;

    return (
      <div className="task-input">
        <input onKeyPress={this.pressEnter} className="input" onChange={this.inputChange} value={input}/>
        <button className="add-btn" onClick={this.addTask}><span>ADD</span></button>
      </div>
    );
  }
}

export default TaskInput;
