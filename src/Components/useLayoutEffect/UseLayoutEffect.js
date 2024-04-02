import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
  const inputRef = useRef();

  useLayoutEffect(()=>{
    console.log(inputRef.current.value); 
  },[]);

  useEffect(()=>{
    inputRef.current.value ="vijay"
  },[])
  return (
    <div>
      <input ref={inputRef} type="text" value="Murali" />
    </div>
  )
}

export default UseLayoutEffect
