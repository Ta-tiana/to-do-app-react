import React from "react";

const Task = ({task,...props}) => {

  const ActionBtn = () => {
    return (
      <div className="action-btn">
        {task.done ?
        <p onClick={props.deleteTask} aria-label="emoji" className="emoji-done" role="img">&#10006; </p> :
        <p onClick={props.makeTaskDone} aria-label="emoji" className="emoji-active" role="img">&#10004; </p>}
      </div>
    )
  };

  const className = 'task' + ' ' +(task.done ? 'task-done': '');

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionBtn/>
    </div>
  )
};

export default Task;
