import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes';
import { Provider } from "react-redux";
import ReduxStore from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/styles.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ReduxStore()}>
    <AppRoutes></AppRoutes>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

