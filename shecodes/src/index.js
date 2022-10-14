import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
//connect thunk to our redux store itself by importing applyMiddleware:
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Auth0Provider
    domain='https://dev-73mzmlg6.us.auth0.com'
    clientId='DoexenCfUNUKbXTKCIBFUI27AuP4wkBb'
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
        <App />
    </Provider>
    </Auth0Provider>
    , document.querySelector("#root"));
