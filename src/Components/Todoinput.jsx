import React from 'react'
import { useState } from 'react'

function Todoinput(props) {
const {handleAddTodos,todoValue,setTodovalue}=props
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
          setTodovalue(e.target.value)}} type="text" placeholder="What needs to be done?" />
        <button onClick={()=>{
          handleAddTodos(todoValue)
          setTodovalue("")}
        }
          >Add</button>
    </header>
  )
}

export default Todoinput