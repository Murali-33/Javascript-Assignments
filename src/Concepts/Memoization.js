import React from "react";

function Memoization() {
  //   //using fabinacci series
  //   const memoize = (num, cache = {}) => {
  //     if (cache[num]) {
  //       return cache[num];
  //     }
  //     if (num === 0) return 0;
  //     if (num === 1 || num === 2) return 1;
  //     return (cache[num] = memoize(num - 2) + memoize(num - 1));
  //   };
  //   console.log(memoize(4));
  //   console.log(memoize(4));
  //   console.log(memoize(4));

  const cache = {};
  const add = (n) => {
    if (cache[n]) {
      console.log("cache fn...");
      return cache[n];
    } else {
      cache[n] = n + 30;
      console.log("regular fn...");
      return cache[n];
    }
  };
  console.log(add(10));
  console.log(add(10));
  console.log(add(20));

  return <div>Hello</div>;
}

export default Memoization;
