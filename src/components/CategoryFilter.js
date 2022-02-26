import React, { useState } from "react";

function CategoryFilter({categories, filterTasks}) {
  const [selectedElement, setSelectedElement] = useState("")
  
  const createButtonElements = categories.map((category) => {
    return (
      <button className= {selectedElement === category ? "selected" : ""} key={category} onClick={handleClick}>{category}</button>
    )
  })

  function handleClick(e) {
    setSelectedElement(e.target.textContent)
    filterTasks(e.target.textContent)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {createButtonElements}
    </div>
  );
}

export default CategoryFilter;
