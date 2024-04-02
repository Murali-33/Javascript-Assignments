import { configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer  from './reducers';
import rootSaga from './sagas'



const sagaMiddleware = createSagaMiddleware();

const store2 = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)


export default store2;

//Middleware in the context of Redux refers to functions that are applied to the process of 
// dispatching actions to reducers. Middleware sits between the action being dispatched and the
//  point at which it reaches the reducer, allowing developers to intercept, modify, or enhance 
//  the behavior of the application.

// Here are some key points about middleware in Redux:

// Enhancing Dispatch:
// Middleware can augment the dispatch function, allowing it to handle additional functionality 
// before or after the action reaches the reducer. This is achieved by wrapping the store's 
// dispatch method with custom logic.

// Async Operations:
// Middleware is commonly used to handle asynchronous operations in Redux. It enables developers
//  to dispatch actions that represent async operations, such as API calls, and process them 
//  before the final state update. Popular middleware for handling asynchronous actions includes 
//  redux-thunk and redux-saga.

// Logging:
// Middleware can be used for logging information about actions, the current state, or other 
// relevant data. This can be helpful for debugging and understanding how the application state 
// changes over time.

// Authentication and Authorization:
// Middleware can be employed to check authentication and authorization before allowing certain 
// actions to be dispatched. For example, a middleware function might verify if a user is 
// authenticated before permitting them to execute a specific action.

// Chaining Middleware:
// Multiple middleware functions can be chained together. Each middleware function receives the
//  dispatch method and the current state as arguments, and it can decide whether to continue the
//   chain or stop the process.

// Examples:

// Thunk Middleware: Allows action creators to return functions instead of plain objects. This is
//  commonly used for handling asynchronous operations.
// Logger Middleware: Logs information about each action and the resulting state.
// Redux Saga: Enables the management of more complex async flows, such as handling multiple 
// asynchronous operations in parallel or sequentially.