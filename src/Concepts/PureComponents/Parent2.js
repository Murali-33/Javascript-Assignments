import React from 'react';

function Parent2({salary,age}) {
  console.log("PureComponent");
  return (
    <div>
      <h1>salary:{salary}</h1>
      <h2>ae:{age}</h2>
    </div>
  )
}

export default React.memo(Parent2) 
