import React, { useState } from "react";
import { increment, decrement, reset, userCount } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const [usrCount, setuserCount] = useState("");
  const counter = useSelector((state) => state.counter.count);
  const addValue = Number(usrCount) || 0;

  const resetAll = () => {
    setuserCount("");
    dispatch(reset());
  };
  return (
    <div>
      <h1>{counter}</h1>
      <input
        type="text"
        value={usrCount}
        onChange={(e) => setuserCount(e.target.value)}
      />{" "}
      <button onClick={() => dispatch(userCount(addValue))}>Add count</button>{" "}
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default Counter;
