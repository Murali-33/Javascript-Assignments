import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todos,setTodos] = useState([]);
  const [newTodos,setNewTodos] = useState();

 const handleSubmit =() =>{
     if(newTodos.trim() === "") return ;
     setTodos([...todos,newTodos])
     setNewTodos('');
 }

 const handleRemove = (index) =>{
     const newtodo = [...todos];
     newtodo.splice(index,1);
     setTodos(newtodo);
 }

  return (
    <div>
      <h4>Todo Application</h4>
      <div>
        <input  value={newTodos} onChange={(e)=>setNewTodos(e.target.value)} type="text" />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <div>
        <ul>
          {
            todos.map((todo,index)=>{
              return (
                <li key={index}>
                  {todo}
                  <button onClick={()=> handleRemove(index)}>Remove</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Todo;
