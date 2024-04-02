import React,{useCallback, useState} from 'react'
import ChildComponent from './ChildComponent'

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback (() =>{
   setCount(count+100)
  },[count]);

  return (
    <div>
      <button onClick={handleIncrement}>Increment : {count}</button>
      <ChildComponent handleIncrement={handleIncrement}/>
    </div>
  )
}

export default UseCallback
