import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { albums } from "./reducers/albums";
import thunk from "redux-thunk";
const spotifyApp = combineReducers({
  albums
});
const store = createStore(
  spotifyApp,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
