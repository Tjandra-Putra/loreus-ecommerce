import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

// Takes reducer as an input
const store = createStore(reducer);

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

ReactDOM.render(
  // Wrapping App with Provider from react-redux to connect. Injecting Store into react component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
