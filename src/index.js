import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import firebase from "./firebase";

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(
    <BrowserRouter>
      <App user={user} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
