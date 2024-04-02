import {useState} from 'react';

function useCounter(initialCount = 0 ,value) {

  const [counter,setCounter] = useState(initialCount);

  const increment =()=>{
    setCounter(counter + value);
  }

  const derement =()=>{
    setCounter(counter - value);   
  }

  const reset =()=>{
    setCounter(0);   
  }

  return [counter,increment,derement,reset]
   
}

export default useCounter
