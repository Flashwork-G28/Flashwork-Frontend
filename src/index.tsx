import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="flashwork.us.auth0.com"
        clientId="mCCTJkEfsO9DEKLLrVv3rMPBEFfU85SV"
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation='localstorage'
    >
      {/* <React.StrictMode> */}
          <BrowserRouter>
              <App />
          </BrowserRouter>
      {/* </React.StrictMode> */}
    </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
