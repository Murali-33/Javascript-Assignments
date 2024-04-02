import React,{useEffect, useRef} from 'react'

function UseRef() {
  const ref = useRef();
  const counterRef = useRef(0);

  useEffect(()=>{
    ref.current.focus();
  });
  const handleClick = () =>{
    counterRef.current +=1;
    alert(`Counter value: ${counterRef.current}`);
  }
  return (
    <div>
      <input ref={ref} type="text"/>
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default UseRef
