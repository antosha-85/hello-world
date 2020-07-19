import React from "react";
import { createStore } from "redux";
import {render} from 'react-dom'
import { Provider } from "react-redux";
import todoApp from "./reducers";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
const store = createStore(todoApp);
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
