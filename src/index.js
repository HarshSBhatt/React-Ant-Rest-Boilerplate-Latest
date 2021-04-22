import ReactDOM from "react-dom";
// import * as Sentry from "@sentry/react";

//! User Files

import Routes from "./Routes";
import { AppContextProvider } from "./AppContext";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

//! Styles

import "./index.css";
import "./styles/main.less";

// if (process.env.NODE_ENV !== "development") {
//   Sentry.init({
//     dsn: process.env.REACT_APP_SENTRY_DSN,
//     tracesSampleRate: 1.0,
//     environment: process.env.NODE_ENV,
//   });
// }

ReactDOM.render(
  <AppContextProvider>
    <Routes />
  </AppContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
