import useCounter from './useCounter';

function CounterTwo() {

  const [counter,increment,derement,reset] = useCounter(12 ,10);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={derement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
