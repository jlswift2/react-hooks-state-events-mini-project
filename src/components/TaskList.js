import React from "react";
import Task from "./Task"

function TaskList({tasks}) {  
  const renderTasks = tasks.map((task) => {
    return(
      <Task key={task.text} text={task.text} category={task.category} />
    )
  })
  
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
