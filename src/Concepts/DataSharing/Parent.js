import React,{useState} from 'react';
import Child from './Child';


function Parent() {
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <div>
      <p>{dataFromChild}</p>
      <Child ondataPass={handleDataFromChild}/>
    </div>
  )
}

export default Parent
