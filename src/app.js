import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import LoadingPage from "./components/LoadingPage";
import { login, logout } from "./actions/auth";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Fonts from './fonts';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
