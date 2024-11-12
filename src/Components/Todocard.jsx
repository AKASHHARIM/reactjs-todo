import React from "react";

function Todocard(props) {
  const { children,handleDeleteTodo,index,handleEditTodo } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button onClick={()=>{handleEditTodo(index)}}>
          <i
            className="fa-solid fa-pen-to-square fa-xl"
            style={{ color: "#258104" }}
          />

          </button>

          <button onClick={()=>{handleDeleteTodo(index)}}>
          <i className="fa-solid fa-trash-can fa-xl" style={{ color: "#b31f05" }} />

          </button>
        </div>
      </li>
    </div>
  );
}

export default Todocard;
