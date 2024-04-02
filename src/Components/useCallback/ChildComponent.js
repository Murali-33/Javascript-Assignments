import React from 'react'

function ChildComponent({handleIncrement}) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={handleIncrement}>Increment from Child</button>
    </div>
  )
}

export default ChildComponent
