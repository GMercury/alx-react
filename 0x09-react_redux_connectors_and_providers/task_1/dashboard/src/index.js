import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { uiReducer } from './reducers/uiReducers';


export const store = createStore(uiReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

