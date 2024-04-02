// UseContext.js
import React, { createContext} from 'react';
import Login from './Login';

export const Authenticate = createContext();

function UseContext() {

  return (
    <div>
      <Authenticate.Provider value={"Murali"}>
        <Login/>
      </Authenticate.Provider>
    </div>
  );
}

export default UseContext;

