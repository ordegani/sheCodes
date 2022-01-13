import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
//connect thunk to our redux store itself by importing applyMiddleware:
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { Provider } from 'react-redux'

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>
, document.querySelector("#root"));
