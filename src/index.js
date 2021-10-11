import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import { MessageReducer } from "../src/reducers/MessageReducer";
import Root from "./components/Root";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(
  MessageReducer,
  enhancer
);


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
