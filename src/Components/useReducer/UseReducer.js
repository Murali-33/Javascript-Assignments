import React, { useReducer } from 'react';

// Define the initial state
const initialState ={
  count:10
}

// Define the reducer function
const reducer = (state,action)=>{
  switch(action.type){
    case 'INCREMENT' : return {
     count : state.count +1
    }
    case 'DECREMENT' : return {
     count : state.count - 1
    }

    default :  return state
     
  }
}
 // Component using useReducer
function UseReducer() {
    // Use useReducer with the defined reducer and initial state
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default UseReducer
