import useCounter from './useCounter';

function CounterOne() {
  const [counter,increment,derement,reset] = useCounter(0,1)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={derement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
