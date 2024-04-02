import React, { useEffect, useState } from 'react';
import Parent2 from './Parent2';


function Parent() {
  console.log("Parent compement");
  const[salary ,setSalary] = useState(1000);
  const [id ,setId] = useState(0);
  const [age,setAge] = useState(24);

  useEffect(()=>{
    setInterval(()=>{
      setId(id+1)
    })
  })
  return (
    <div>
      Hello
      <h1>{id}</h1>
      <Parent2 salary={salary} age={age}/>
    </div>
  )
}

export default Parent
