import React, { useState } from "react";

function NewTaskForm({categories, addNewTask}) {
  const [item, setItem] = useState({ text: "", category: "Code" })
  const createOptions = categories.map(category => {
    return (
      <option key={category}>{category}</option>
    )
  })

  function handleChange(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewTask(item)
    console.log(e.target)
    // e.target.reset()
    setItem({ text: "", category: "Code" })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {createOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
