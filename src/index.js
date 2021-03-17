import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
// import * as Sentry from "@sentry/react";

//! User Files

import { AppContextProvider } from "./AppContext";
import client from "./apollo";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";

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
  <ApolloProvider client={client}>
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
