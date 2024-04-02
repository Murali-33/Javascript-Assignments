import React, { useState } from 'react'

function Child({ondataPass}) {
  const [data ,setdata] = useState('');

  const handleClick = ()=>{
    ondataPass(data)
  }
  return (
    <div>
      <input type="text" value={data} onChange={(e)=> setdata(e.target.value)} />
      <button onClick={handleClick}>button</button>
    </div>
  )
}

export default Child
