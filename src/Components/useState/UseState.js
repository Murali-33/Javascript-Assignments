import React, { useState } from 'react'

function UseState() {
  const [count ,setCount] = useState(0);
  const [name,setName] = useState('Murali')

  const handleClick = () =>{
     setCount(count+1);
    //  setName("Vijay");
  }

  return (
    <div>
      <p>Use state Hooks</p>
      <p >{count}</p>
      <p>{name}</p>
      <input type="text" value={name} onChange={((e)=> setName(e.target.value))}/>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default UseState
