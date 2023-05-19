import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import { Provider } from 'react-redux';
import { createStore } from "redux";

import filteredProductReducer from "./Components/Collectiepagina/Backlog/reducers/filteredProductReducer";

/* store */
const store = createStore(filteredProductReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


