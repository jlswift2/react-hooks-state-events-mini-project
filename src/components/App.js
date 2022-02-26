import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const categories = [...CATEGORIES]

  //States
  const [tasks, setTasks] = useState([...TASKS])
  // const [inputFilter, setInputFilter] = useState("All")
  // const [taskToAdd, setTaskToAdd] = useState(  {
  //   text: "",
  //   category: "Code",
  // })

  //New Task Form Categories
  const newFormCat = categories.filter(category => category !== "All")


  function filterTasks(newFilter) {
    setTasks(TASKS.filter((task) => 
    newFilter === "All" || newFilter === task.category)
  )
  }

  function addNewTask(newTask) {
    console.log(newTask)
    setTasks([...tasks, newTask])

  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm categories= {newFormCat} addNewTask={addNewTask} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
