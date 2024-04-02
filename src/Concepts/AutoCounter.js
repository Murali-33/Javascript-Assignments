import React, { useEffect, useState } from 'react'

function AutoCounter() {
  const [count ,setCount] = useState(0);

  useEffect(()=>{
     let timer = setInterval(()=>{
      setCount(count+1)
     },2000)
     return ()=>{
       clearInterval(timer)
     }
  });

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default AutoCounter
