// Login.js
import React, { useContext } from 'react';
import { Authenticate } from './UseContext';


function Login() {
const username = useContext(Authenticate)
  return (
    <div><p>User name :{username}</p></div>
    
  );
}

export default Login;

//The useContext hook in React is used for consuming values from a React context. 
//Context provides a way to pass data through the component tree without having to pass props 
//manually at every level. useContext makes it easier to access the values from a context within a 
//functional component.
