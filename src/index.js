import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

function contador(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    default:
      return state;
  }
}

const store = configureStore({
  reducer: contador,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
