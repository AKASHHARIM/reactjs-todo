import Todoinput from "./Components/Todoinput"
import Todolist from "./Components/Todolist"
import { useState, useEffect } from "react"

function App() {


  const [todos, setTodos] = useState([
    
  ])
  const [todoValue,setTodovalue]=useState("")

  const persistData=(newList)=>{
    localStorage.setItem("todos",JSON.stringify({todos : newList
    }))

  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem("todos")
    if(!localTodos){
      return
    }
      localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
  },[])


  const handleAddTodos = (newTodo) => {
    const newTodolist=[...todos,newTodo]
    if(newTodo){

    persistData(newTodolist)
       return setTodos(newTodolist)


    }
    alert("please tell what needs to be done")
  }

  const handleDeleteTodos=(index)=>{
    const newTodolist=todos.filter((todo,todoIndex)=>{
          return todoIndex!==index
    })
    persistData(newTodolist)
    setTodos(newTodolist)
  }
const handleEditTodos=(index)=>{
  const editedValue=todos[index]
  setTodovalue(editedValue)
  handleDeleteTodos(index)
        
}

  return (
    <>
      <Todoinput todoValue={todoValue} setTodovalue={setTodovalue} handleAddTodos={handleAddTodos} />
      <Todolist handleDeleteTodo={handleDeleteTodos}
       handleEditTodo={handleEditTodos}
       todos={todos} />
    </>
  )
}

export default App
