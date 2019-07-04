import React from 'react';
import Counter from './Counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    case 'RESET' :
      return {
        count: 0
      }
    default:
      return state;
  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "RESET" });

function App() {
  return (
    <div >
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
