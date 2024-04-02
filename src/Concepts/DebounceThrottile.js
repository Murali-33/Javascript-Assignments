import React from "react";

function DebounceThrottile() {
  
  const handleChange = (e) => {
    console.log("Debouncing...");
  };

  //every time the mouse moved this function will be invoked
  const handleMouseMove = (e) => {
    console.log("throttling...");
  };

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }



  //throttle function
  function throttle(func, delay) {
    let run = false;
    return function (...args) {
      if (!run) {
        func(...args);
        run = true;
        setTimeout(() => (run = false), delay);
      }
    };
  }

  //event listener to track the movement of the mouse
  window.addEventListener("mousemove", throttle(handleMouseMove, 2000));
  
  return (
    <div>
      <label>Input : </label>
      <input type="text" onChange={debounce(handleChange, 500)} />
    </div>
  );
}

export default DebounceThrottile;
